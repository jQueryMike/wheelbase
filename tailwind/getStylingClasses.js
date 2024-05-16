import mappings from '../app/_utils/buildStyling/mappings.json' with { type: "json" };

const getStylingClasses = () => Array.from(new Set([
    ...Object.values(mappings.borderRadius),
  	...Object.values(mappings.borderStyle),
  	...Object.values(mappings.borderWidth),

    // ...Object.keys(mappings.gridColumn).map(([, v]) => v),
    // ...Object.keys(mappings.gridGap).map(([, v]) => v),
    // ...Object.keys(mappings.spacing).map(([, v]) => v),
    // ...Object.keys(mappings.fontSize).map(([, v]) => v),
    ...mappings.fontWeight.map(option => `font-${option.toLowerCase()}`),
  
    ...Object.values(mappings.letterSpacing),
    ...Object.values(mappings.lineHeight),
	])).join(' ');


export default getStylingClasses;
