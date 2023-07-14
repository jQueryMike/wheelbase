const extractClassOverrides = (input?: { [propName: string]: any }, prefix = 'tw__') => {
  if (!input) return {};

  const output = { ...input };

  Object.keys(input)
    .filter((key) => !key.startsWith(prefix))
    .forEach((key) => delete output[key]);

  return output;
};
export default extractClassOverrides;
