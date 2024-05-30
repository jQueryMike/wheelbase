export default {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  proseWrap: 'always',
  tabWidth: 2,
  plugins: [require('prettier-plugin-nativewind')],
  tailwindCustomTaggedTemplates: ['tw'],
  importOrder: ['^@components$', '^@utilities$', '^[../]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
