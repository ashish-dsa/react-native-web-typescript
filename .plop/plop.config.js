const COMPONENTS_PATH = "../src/components/";
const SCREENS_PATH = "../src/screens/";
const componentGenerator = {
  description: "Create a new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name?",
      default: "Button",
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: COMPONENTS_PATH + "{{properCase name}}/index.ts",
        templateFile: "./index.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: COMPONENTS_PATH + "{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./componentName.sfc.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: COMPONENTS_PATH + "{{properCase name}}/{{properCase name}}.test.tsx",
        templateFile: "./componentName.test.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: COMPONENTS_PATH + "{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "./componentName.story.tsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

const screenGenerator = {
  description: "Create a new screen",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Screen name?",
      default: "Home",
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: SCREENS_PATH + "{{properCase name}}/index.ts",
        templateFile: "./index.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: SCREENS_PATH + "{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./componentName.sfc.tsx.hbs",
        abortOnFail: true,
      },
    ];
    return actions;
  },
};

module.exports = plop => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("screen", screenGenerator);
};
