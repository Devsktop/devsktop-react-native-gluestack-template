import type { Preview } from "@storybook/react-native-web-vite";
import "../global.css";
import withThemeProvider from "./ThemeProviderDecorator";

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Toggle between light and dark mode",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
