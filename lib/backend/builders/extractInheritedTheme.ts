const extractInheritedTheme = (name: string, inheritedThemes: any[] = []) => {
  if (inheritedThemes.length < 1) return [];

  const lastTheme = [...inheritedThemes].pop();

  const extractedTheme = lastTheme ? lastTheme[`${name}Theme`] : undefined;

  if (!extractedTheme || extractedTheme.items.length < 1) return [];

  return [extractedTheme.items[0].content.properties];
};

export default extractInheritedTheme;
