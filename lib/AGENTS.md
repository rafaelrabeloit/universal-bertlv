# BERTLV-EMV Library Rules

## Code Quality Requirements

### Linting Rules
- All code must pass ktlint checks
- All code must pass detekt analysis
- No new warnings or issues should be introduced in the codebase

### Common Linting Issues to Avoid
1. Trailing commas in multi-line parameter lists
2. Line length exceeding 120 characters
3. Missing newline at end of file
4. Incorrect indentation (use 4 spaces)
5. Unused imports
6. Missing documentation for public APIs
7. Inconsistent spacing around operators
8. Missing spaces after commas
9. Missing spaces after colons
10. Incorrect order of modifiers

### Testing Requirements
- All tests must pass before committing
- Test coverage must be maintained above 80%
- New features must include corresponding tests
- Integration tests must be included for critical paths
- Test names must follow the Given/When/Then pattern using backtick notation:
  ```kotlin
  fun `Given [context] When [action] Then [expected result]`()
  ```
- Break large test classes into logical inner classes (without the inner modifier) for better organization
- Group related tests in inner classes (without the inner modifier) with descriptive names
- Keep test methods focused and small
- Use descriptive test data and assertions
- Document complex test scenarios with comments

### Code Style Guidelines
- Use meaningful variable and function names
- Follow Kotlin coding conventions
- Document all public APIs with KDoc
- Keep functions focused and small
- Use appropriate access modifiers
- Prefer immutable data structures
- Use extension functions when appropriate

### Build Requirements
- All Gradle builds must complete successfully
- No deprecated API usage
- All dependencies must be up to date
- No security vulnerabilities in dependencies

### Documentation
- Keep README.md up to date
- Document all breaking changes
- Include usage examples for new features
- Maintain API documentation
