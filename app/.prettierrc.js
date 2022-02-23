module.exports = {
  // デフォルト設定
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  // quoteProps: 'as-needed',
  // jsxSingleQuote: false,
  trailingComma: "none",
  // bracketSpacing: true,
  // jsxBracketSameLine: false,
  // arrowParens: 'always',
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // jsxBracketSameLine: false,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: 'preserve',
  // htmlWhitespaceSensitivity: "css",
  // vueIndentScriptAndStyle: false,
  // endOfLine: 'lf',
  // embeddedLanguageFormatting: 'auto',
  overrides: [
    // HTMLファイル
    {
      files: "*.html",
      options: {}
    },
    // CSSファイル
    {
      files: "*.css",
      options: {}
    }
  ]
}
