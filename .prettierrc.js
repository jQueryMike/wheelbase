module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  proseWrap: 'always',
  tabWidth: 2,
  plugins: [require('prettier-plugin-nativewind')],
  tailwindCustomTaggedTemplates: ['tw'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@components$', '^@utilities$', '^[../]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
