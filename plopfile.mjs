// eslint-disable-next-line func-names
export default function (plop) {
  plop.setHelper('componentCase', (text) => text.replace(' ', '').toLowerCase());

  plop.setGenerator('Component', {
    description: 'this will generate a component with basic boilerplate code.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'list',
        name: 'atomicType',
        message: 'Select the atomic type',
        choices: ['atoms', 'molecules', 'organisms'],
      },
      {
        type: 'confirm',
        name: 'asynchronous',
        message: 'Is this component asynchronous?',
        default: false
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'app/_components/{{atomicType}}/{{pascalCase name}}',
        base: 'plop-templates/Component/',
        templateFiles: 'plop-templates/Component/*',
      },
      {
        type: 'addMany',
        destination: 'app/_components/{{atomicType}}/{{pascalCase name}}/variants/',
        base: 'plop-templates/Component/variants/',
        templateFiles: 'plop-templates/Component/variants/*',
      },
    ],
  });

  plop.setGenerator('Utility', {
    description: 'this will generate a utility function with basic boilerplate code.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'utility function name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'app/_utils/{{kebabCase name}}',
        base: 'plop-templates/Utility/',
        templateFiles: 'plop-templates/Utility/*',
      },
    ],
  });

  plop.setGenerator('Hook', {
    description: 'this will generate a custom hook with basic boilerplate code.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'hook name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'app/_hooks/use{{pascalCase name}}',
        base: 'plop-templates/Hook/',
        templateFiles: 'plop-templates/Hook/*',
      },
    ],
  });
}