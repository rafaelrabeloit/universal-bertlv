Pod::Spec.new do |s|
  s.name             = 'bertlv_emv_mobile'
  s.version          = '0.0.1'
  s.summary          = 'EMV BER-TLV parser via Kotlin/Native + dart:ffi.'
  s.description      = 'Flutter FFI plugin for bertlv-emv Kotlin/Native library.'
  s.homepage         = 'https://github.com/rafaelrabeloit/emv-tools'
  s.license          = { :file => '../LICENSE' }
  s.author           = { 'Rafael' => 'rafael@example.com' }
  s.source           = { :path => '.' }
  s.source_files     = 'Classes/**/*'
  s.dependency 'Flutter'
  s.platform         = :ios, '13.0'
  s.swift_version    = '5.0'
  s.static_framework = true
  s.vendored_libraries = 'Libraries/libbertlv_emv.a'
end
