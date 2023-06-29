const getGridCols = (classList: string | undefined, properties: { [propName: string]: any }) => {
  let returnClassList = classList || '';

  Object.keys(properties)
    .filter((key) => key.startsWith('gridCols_') && typeof (properties[key] === String) && !!properties[key])
    .forEach((key) => {
      returnClassList += ` ${key.replace('gridCols_', '')}:grid-cols-${properties[key]}`;
    });

  return returnClassList;
};

export default getGridCols;
