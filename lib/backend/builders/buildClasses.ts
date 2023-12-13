import extractClassOverrides from './extractClassOverrides';

/**
 *
 *  "paddingTop": "medium",
 *  "paddingRight": "small",
 *  "paddingBottom": "custom",
 *  "paddingLeft": "small",
 *  "paddingBottomCustom": "m-8"
 */

type SizeValue = 'small' | 'medium' | 'large' | 'custom';

const WhitespaceMap = new Map<SizeValue, string>([
  ['small', '2'],
  ['medium', '4'],
  ['large', '8'],
]);

function getClass(p?: SizeValue | null): string | undefined {
  if (!p) return '';
  return WhitespaceMap.get(p);
}

/**
 * Generate padding classes from padding composition
 * @param param0 Padding composition
 * @returns classes string
 */
function paddingToClasses({ paddingTop, paddingRight, paddingBottom, paddingLeft, ...custom }: any) {
  if (
    [paddingRight, paddingBottom, paddingLeft].every((x) => x === paddingTop) &&
    paddingTop &&
    paddingTop !== 'custom'
  ) {
    return `p-${WhitespaceMap.get(paddingTop)}`;
  }

  return [
    paddingTop === 'custom' ? custom.paddingTopCustom : `pt-${getClass(paddingTop as SizeValue)}`,
    paddingRight === 'custom' ? custom.paddingRightCustom : `pr-${getClass(paddingRight as SizeValue)}`,
    paddingBottom === 'custom' ? custom.paddingBottomCustom : `pb-${getClass(paddingBottom as SizeValue)}`,
    paddingLeft === 'custom' ? custom.paddingLeftCustom : `pl-${getClass(paddingLeft as SizeValue)}`,
  ].join(' ');
}

/**
 * Generate margin classes from margin composition
 * @param param0 Margin composition
 * @returns classes string
 */
function marginToClasses({ marginTop, marginRight, marginBottom, marginLeft, ...custom }: any) {
  if ([marginRight, marginBottom, marginLeft].every((x) => x === marginTop) && marginTop && marginTop !== 'custom') {
    return `m-${WhitespaceMap.get(marginTop)}`;
  }

  return [
    marginTop === 'custom' ? custom.marginTopCustom : `pt-${getClass(marginTop as SizeValue)}`,
    marginRight === 'custom' ? custom.marginRightCustom : `pr-${getClass(marginRight as SizeValue)}`,
    marginBottom === 'custom' ? custom.marginBottomCustom : `pb-${getClass(marginBottom as SizeValue)}`,
    marginLeft === 'custom' ? custom.marginLeftCustom : `pl-${getClass(marginLeft as SizeValue)}`,
  ].join(' ');
}

/**
 * Generate color classes from color composition
 * @param param0 Color composition
 * @returns classes string
 */
function colorToClasses({ id, hex, opacity = 100 }: any) {
  if (/\w+\.\w+/.test(id)) {
    const [type, name] = id.split('.');
    return `text-${type}-${name} opacity-[${opacity / 100}]`;
  }
  return `text-[${hex}] opacity-[${opacity / 100}]`;
}

/**
 * Generate appearance classes from appearance composition
 * @param param0 appearance composition
 * @returns classes string
 */
function extractBlockAppearance({ margin, padding, color, backgroundColor }: any) {
  return {
    margin: marginToClasses(margin),
    padding: paddingToClasses(padding),
    color: colorToClasses(color),
    backgroundColor: colorToClasses(backgroundColor),
  };
}

function buildClasses(
  name: string,
  location: 'blocks' | 'layouts' | 'utility-components',
  variant: string,
  blockAppearance: any = {},
  blockOverrides: any = {},
  globalBlockTheme: any = {},
  inheritedThemes: any[] = [],
  classesIdentifier = 'classes',
) {
  // console.log(
  //   `buildClasses ${name}`,
  //   JSON.stringify(
  //     {
  //       name,
  //       location,
  //       variant,
  //       blockAppearance,
  //       blockOverrides,
  //       globalBlockTheme,
  //       inheritedThemes,
  //       classesIdentifier,
  //     },
  //     null,
  //     2,
  //   ),
  // );
  try {
    const variants = [
      globalBlockTheme?.items?.[0],
      ...inheritedThemes.map((inheritedTheme) => inheritedTheme.themeVariant),
      variant,
    ].filter((v) => !!v);

    // const appearance = extractBlockAppearance(blockAppearance);
    // console.log(appearance);

    const overrides = [
      extractClassOverrides(globalBlockTheme),
      ...inheritedThemes.map((inheritedTheme) => extractClassOverrides(inheritedTheme)),
      extractClassOverrides(
        Object.fromEntries(Object.entries(blockOverrides).filter(([, value]) => !!value)) as { [key: string]: any },
      ) ?? {},
    ];

    const activeVariant = require(`/lib/components/${location}/${name}/variants/${variants.slice(-1)[0]}`).default;

    const outputClasses = { ...activeVariant[classesIdentifier] };

    overrides.forEach((overridesItem) => {
      Object.keys(overridesItem).forEach((key) => {
        const classesKey = key.split('_')[1];
        if (classesKey) {
          const klasses = (outputClasses[classesKey] || '').split(' ');
          klasses.push(overridesItem[key]);
          outputClasses[classesKey] = klasses.join(' ');
        }
      });
    });

    return outputClasses;
  } catch (error) {
    console.error(error);
  }
  return {};
}

export default buildClasses;
