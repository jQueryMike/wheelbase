export type ClassesProperty = undefined | string | Classes;

export interface Classes {
  [propName: string]: ClassesProperty;
}

export interface ClassesBuilderConfig {
  location: string;
  classes: Classes;
}

export const tw = (inputs: TemplateStringsArray) => inputs.join();

class ClassesBuilder {
  location: string;

  errors: string[] = [];

  classes: { [propName: string]: string } = {};

  public parse = (property: ClassesProperty, keys: string[]): string => {
    if (!property) return '';

    if (typeof property === 'string' || property instanceof String) {
      this.checkPrefixes(property.toString(), keys);

      return property.toString();
    }

    return Object.keys(property)
      .map((nestedKey: string) => this.parse(property[nestedKey], [...keys, nestedKey]))
      .join(' ');
  };

  public checkPrefixes = (property: string, keys: string[]): void => {
    property.split(' ').forEach((className: string) => {
      keys.forEach((key: string) => {
        if (key !== 'default' && className.indexOf(`${key}:`) < 0) {
          console.error(
            `Expected class "${className}" to include the pseudo-selector "${key}:" in location "${this.location}".`,
          );
        }
      });
    });
  };

  constructor(classesBuilderConfig: ClassesBuilderConfig) {
    this.location = classesBuilderConfig.location;

    const classes: { [propName: string]: string } = {};
    Object.keys(classesBuilderConfig.classes).forEach((key: string) => {
      classes[key] = this.parse(classesBuilderConfig.classes[key], []);
    });

    this.classes = classes;
  }
}

export default ClassesBuilder;
