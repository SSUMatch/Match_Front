import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

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
    // SVGR 플러그인을 추가합니다.
    config.plugins = [
      ...(config.plugins || []),
      svgr({
        svgrOptions: {
          icon: true, // 이 옵션은 필요에 따라 설정합니다
        },
      }),
    ];

    // 경로 별칭 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };
    // 환경변수 설정
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
