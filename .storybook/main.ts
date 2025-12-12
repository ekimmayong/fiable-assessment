import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react-vite",
  "staticDirs": [
    "../public"
  ]
};
export default config;