import mappings from '../app/_utils/buildStyling/mappings.json' with { type: "json" };

const getStylingClasses = () => {

    const spacingVariants = ['p', 'px', 'py', 'pl', 'pr', 'pb', 'pt', 'm', 'mx', 'my', 'ml', 'mr', 'mb', 'mt'];
    
    return Array.from(new Set([
    ...Object.values(mappings.borderRadius),
  	...Object.values(mappings.borderStyle),
  	...Object.values(mappings.borderWidth),

    ...Object.values(mappings.gridColumn).map(o => Object.entries(o).map(([k,v]) => `${k}:${v}`)).flat(),
    ...Object.values(mappings.gridGap).map(o => Object.entries(o).map(([k,v]) => `${k}:${v}`)).flat(),
    ...(Object.values(mappings.spacing).map(o => Object.values(o))).flat().map(o => Object.entries(o).map(([k,v]) => spacingVariants.map(prefix => `${k}:${prefix}-${v}`))).flat(2),
    ...(Object.values(mappings.fontSize).map(o => Object.values(o))).flat().map(o => Object.entries(o).map(([k,v]) => `${k}:${v}`)).flat(),
    ...mappings.fontWeight.map(option => `font-${option.toLowerCase()}`),
  
    ...Object.values(mappings.letterSpacing),
    ...Object.values(mappings.lineHeight),
	])).join(' ');

}

export default getStylingClasses;
