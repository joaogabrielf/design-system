import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    themes: themes.dark,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;
