import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('package', {
    description: 'Generate a new package in the `packages` directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the name of the package? (You can skip the `@hooklab/` prefix)',
        validate: (input) => {
          if (!input) return 'Package name is required';
          if (!/^[a-z-]+$/.test(input)) {
            return 'Package name must be lowercase and contain only letters and hyphens!'
          }
          return true;
        }
      },
    ],
    actions: (answers) => {
      if (answers?.name.startsWith('@hooklab/')) {
        answers.name = answers.name.replace('@hooklab/', '');
      }

      const actions: PlopTypes.ActionType[] = [
        {
          type: 'add',
          path: 'packages/{{ name }}/package.json',
          templateFile: 'templates/package.json.hbs',
        },
        {
          type: 'add',
          path: 'packages/{{ name }}/tsconfig.json',
          templateFile: 'templates/tsconfig.json.hbs',
        },
      ];

      return actions;
    },
  });

  plop.setGenerator('tooling', {
    description: 'Generate a new tooling package in the `tooling` directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the tooling package?',
        validate: (input) => {
          if (!input) return 'Package name is required!';
          if (!/^[a-z-]+$/.test(input)) {
            return 'Package name must be lowercase and contain only letters and hyphens!';
          }
          return true;
        },
      },
    ],
    actions: () => {
      const actions: PlopTypes.ActionType[] = [
        {
          type: 'add',
          path: 'tooling/{{ name }}/package.json',
          templateFile: 'templates/tooling-package.json.hbs',
        },
        {
          type: 'add',
          path: 'tooling/{{ name }}/tsconfig.json',
          templateFile: 'templates/tsconfig.json.hbs',
        },
      ];

      return actions;
    },
  });
}
