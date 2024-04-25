import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Vite-specific configurations
  viteFinal: async (config, { configType }) => {
    // Return your custom Vite config
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };
    // Environment variables or any other Vite config adjustments
    if (configType === "DEVELOPMENT") {
      config.define = {
        ...config.define,
        "process.env.NODE_ENV": '"development"',
      };
    } else {
      config.define = {
        ...config.define,
        "process.env.NODE_ENV": '"production"',
      };
    }
    return config;
  },
};

export default config;
