import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:bertlv_emv/bertlv_emv.dart';

void main() {
  runApp(const EmvToolsApp());
}

class EmvToolsApp extends StatelessWidget {
  const EmvToolsApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EMV TLV Parser',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: const Color(0xFF1A237E),
        useMaterial3: true,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: const Color(0xFF5C6BC0),
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      home: const ParserPage(),
    );
  }
}

class ParserPage extends StatefulWidget {
  const ParserPage({Key? key}) : super(key: key);

  @override
  State<ParserPage> createState() => _ParserPageState();
}

class _ParserPageState extends State<ParserPage> {
  final _controller = TextEditingController();
  final _emv = BertlvEmv();
  List<TlvResult>? _results;
  String? _error;
  String? _version;

  static const _samples = {
    'CID + AC': '9F270180 9F2608C2C12B098F3B29DA',
    'TVR': '9505 0400048000',
    'AIP': '82020000',
    'Constructed (70)': '700E 9F270180 9F2608C2C12B098F3B29DA',
  };

  @override
  void initState() {
    super.initState();
    try {
      _version = _emv.version;
    } catch (_) {}
    _controller.text = '9F2608C2C12B098F3B29DA9F270180';
  }

  void _parse() {
    final input = _controller.text.replaceAll(RegExp(r'\s+'), '').trim();
    if (input.isEmpty) {
      setState(() {
        _error = 'Please enter hex TLV data.';
        _results = null;
      });
      return;
    }
    try {
      final results = _emv.parseTlvList(input);
      setState(() {
        _results = results;
        _error = null;
      });
    } catch (e) {
      setState(() {
        _error = e.toString();
        _results = null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final isWide = MediaQuery.of(context).size.width > 720;

    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar.medium(
            title: const Text('EMV TLV Parser'),
            actions: [
              if (_version != null)
                Padding(
                  padding: const EdgeInsets.only(right: 16),
                  child: Center(
                    child: Text(
                      'v$_version',
                      style: Theme.of(context).textTheme.labelSmall,
                    ),
                  ),
                ),
            ],
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.symmetric(
                horizontal: isWide ? 48 : 16,
                vertical: 16,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _buildInputArea(isWide),
                  const SizedBox(height: 24),
                  if (_error != null) _buildError(),
                  if (_results != null) _buildResultTree(),
                  if (_results == null && _error == null)
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.only(top: 48),
                        child: Text(
                          'Enter hex TLV data and tap Parse.',
                          style: Theme.of(context)
                              .textTheme
                              .bodyLarge
                              ?.copyWith(
                                color: Theme.of(context).colorScheme.outline,
                              ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInputArea(bool isWide) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                labelText: 'TLV Hex Data',
                hintText: 'e.g. 9F2608C2C12B098F3B29DA9F270180',
                border: const OutlineInputBorder(),
                suffixIcon: IconButton(
                  icon: const Icon(Icons.clear),
                  onPressed: () {
                    _controller.clear();
                    setState(() {
                      _results = null;
                      _error = null;
                    });
                  },
                ),
              ),
              maxLines: 3,
              minLines: 1,
              style: const TextStyle(fontFamily: 'monospace', fontSize: 14),
              inputFormatters: [
                FilteringTextInputFormatter.allow(RegExp(r'[0-9a-fA-F\s]')),
              ],
              onSubmitted: (_) => _parse(),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              alignment: WrapAlignment.spaceBetween,
              children: [
                Wrap(
                  spacing: 6,
                  runSpacing: 6,
                  children: _samples.entries.map((e) {
                    return ActionChip(
                      label: Text(e.key, style: const TextStyle(fontSize: 12)),
                      onPressed: () {
                        _controller.text = e.value.replaceAll(' ', '');
                        _parse();
                      },
                    );
                  }).toList(),
                ),
                FilledButton.icon(
                  onPressed: _parse,
                  icon: const Icon(Icons.search),
                  label: const Text('Parse'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildError() {
    return Card(
      color: Theme.of(context).colorScheme.errorContainer,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Icon(Icons.error_outline,
                color: Theme.of(context).colorScheme.error),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                _error!,
                style: TextStyle(
                    color: Theme.of(context).colorScheme.onErrorContainer),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildResultTree() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          '${_results!.length} TLV element${_results!.length == 1 ? "" : "s"} parsed',
          style: Theme.of(context).textTheme.titleSmall,
        ),
        const SizedBox(height: 8),
        ..._results!.map((r) => _TlvTreeNode(result: r, depth: 0)),
      ],
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}

/// A single TLV node in the expandable tree.
class _TlvTreeNode extends StatefulWidget {
  final TlvResult result;
  final int depth;

  const _TlvTreeNode({required this.result, required this.depth});

  @override
  State<_TlvTreeNode> createState() => _TlvTreeNodeState();
}

class _TlvTreeNodeState extends State<_TlvTreeNode> {
  bool _expanded = true;

  TlvResult get r => widget.result;
  bool get _hasExpandableContent =>
      (r.isConstructed && r.children != null && r.children!.isNotEmpty) ||
      r.explanation != null;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final indent = widget.depth * 16.0;

    return Padding(
      padding: EdgeInsets.only(left: indent),
      child: Card(
        elevation: widget.depth == 0 ? 1 : 0,
        color: widget.depth == 0
            ? cs.surfaceContainerLow
            : cs.surfaceContainerLowest,
        margin: const EdgeInsets.only(bottom: 6),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            InkWell(
              onTap: _hasExpandableContent
                  ? () => setState(() => _expanded = !_expanded)
                  : null,
              borderRadius: BorderRadius.circular(12),
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: _buildHeader(cs),
              ),
            ),
            if (_expanded) _buildBody(cs),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader(ColorScheme cs) {
    return Row(
      children: [
        if (_hasExpandableContent)
          Icon(
            _expanded ? Icons.expand_more : Icons.chevron_right,
            size: 20,
            color: cs.primary,
          ),
        if (_hasExpandableContent) const SizedBox(width: 4),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
          decoration: BoxDecoration(
            color: r.isConstructed
                ? cs.tertiaryContainer
                : cs.primaryContainer,
            borderRadius: BorderRadius.circular(6),
          ),
          child: Text(
            r.tagHex,
            style: TextStyle(
              fontFamily: 'monospace',
              fontWeight: FontWeight.bold,
              fontSize: 14,
              color: r.isConstructed
                  ? cs.onTertiaryContainer
                  : cs.onPrimaryContainer,
            ),
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            r.tagName ?? 'Unknown Tag',
            style: TextStyle(
              fontWeight: FontWeight.w600,
              color: r.tagName != null ? cs.onSurface : cs.outline,
            ),
          ),
        ),
        Text(
          '${r.length}B',
          style: TextStyle(
            fontSize: 12,
            color: cs.outline,
          ),
        ),
        const SizedBox(width: 8),
        Container(
          constraints: const BoxConstraints(maxWidth: 200),
          child: Text(
            r.valueHex,
            style: TextStyle(
              fontFamily: 'monospace',
              fontSize: 12,
              color: cs.outline,
            ),
            overflow: TextOverflow.ellipsis,
          ),
        ),
      ],
    );
  }

  Widget _buildBody(ColorScheme cs) {
    return Padding(
      padding: const EdgeInsets.only(left: 12, right: 12, bottom: 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (r.description != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Text(
                r.description!,
                style: TextStyle(fontSize: 13, color: cs.outline),
              ),
            ),
          // Children for constructed tags
          if (r.isConstructed && r.children != null)
            ...r.children!.map(
                (c) => _TlvTreeNode(result: c, depth: widget.depth + 1)),
          // Explanation
          if (r.explanation != null) _buildExplanation(cs),
        ],
      ),
    );
  }

  Widget _buildExplanation(ColorScheme cs) {
    final explanation = r.explanation!;

    // Detect bitfield-style explanations (multi-line with byte/bit patterns)
    if (_isBitfieldExplanation(explanation)) {
      return _buildBitfieldTable(explanation, cs);
    }

    // Simple single-line explanation
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: cs.secondaryContainer.withOpacity(0.4),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(
        explanation,
        style: TextStyle(
          fontFamily: 'monospace',
          fontSize: 13,
          color: cs.onSecondaryContainer,
        ),
      ),
    );
  }

  bool _isBitfieldExplanation(String text) {
    final lines = text.split('\n');
    if (lines.length < 2) return false;
    return lines.any((l) =>
        RegExp(r'[Bb]yte\s+\d|[Bb]it\s+\d|b\d[\s-]', caseSensitive: false)
            .hasMatch(l));
  }

  Widget _buildBitfieldTable(String explanation, ColorScheme cs) {
    final lines =
        explanation.split('\n').where((l) => l.trim().isNotEmpty).toList();

    final List<_BitfieldRow> rows = [];
    String? currentByte;

    for (final line in lines) {
      final trimmed = line.trim();

      final byteMatch = RegExp(r'^[Bb]yte\s+(\d+)').firstMatch(trimmed);
      if (byteMatch != null) {
        currentByte = 'Byte ${byteMatch.group(1)}';
        continue;
      }

      final bitMatch =
          RegExp(r'^\s*(b\d[\w-]*|[Bb]it\s+\d[\w-]*)[\s:]+(.*)').firstMatch(
              trimmed);
      if (bitMatch != null) {
        rows.add(_BitfieldRow(
          byte: currentByte,
          bit: bitMatch.group(1)!.trim(),
          description: bitMatch.group(2)!.trim(),
        ));
        continue;
      }

      if (trimmed.contains(':')) {
        final parts = trimmed.split(':');
        rows.add(_BitfieldRow(
          byte: currentByte,
          bit: parts[0].trim(),
          description: parts.sublist(1).join(':').trim(),
        ));
      } else if (trimmed.isNotEmpty) {
        rows.add(_BitfieldRow(
          byte: currentByte,
          bit: '',
          description: trimmed,
        ));
      }
    }

    if (rows.isEmpty) {
      return Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: cs.secondaryContainer.withOpacity(0.4),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Text(explanation,
            style: const TextStyle(fontFamily: 'monospace', fontSize: 12)),
      );
    }

    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: cs.outlineVariant),
        borderRadius: BorderRadius.circular(8),
      ),
      clipBehavior: Clip.antiAlias,
      child: Table(
        columnWidths: const {
          0: IntrinsicColumnWidth(),
          1: IntrinsicColumnWidth(),
          2: FlexColumnWidth(),
        },
        border: TableBorder(
          horizontalInside:
              BorderSide(color: cs.outlineVariant.withOpacity(0.5)),
        ),
        children: [
          TableRow(
            decoration:
                BoxDecoration(color: cs.primaryContainer.withOpacity(0.5)),
            children: const [
              _TableCell(text: 'Byte', bold: true),
              _TableCell(text: 'Bit', bold: true),
              _TableCell(text: 'Description', bold: true),
            ],
          ),
          ...rows.map((row) {
            return TableRow(
              children: [
                _TableCell(text: row.byte ?? '', mono: true),
                _TableCell(text: row.bit, mono: true),
                _TableCell(text: row.description),
              ],
            );
          }),
        ],
      ),
    );
  }
}

class _BitfieldRow {
  final String? byte;
  final String bit;
  final String description;

  _BitfieldRow({this.byte, required this.bit, required this.description});
}

class _TableCell extends StatelessWidget {
  final String text;
  final bool bold;
  final bool mono;

  const _TableCell({
    required this.text,
    this.bold = false,
    this.mono = false,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 12,
          fontWeight: bold ? FontWeight.w600 : FontWeight.normal,
          fontFamily: mono ? 'monospace' : null,
        ),
      ),
    );
  }
}
