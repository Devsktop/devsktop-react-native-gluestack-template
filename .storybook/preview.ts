import type { Preview } from "@storybook/react-native-web-vite";
import "../global.css";

import { config } from "../components/gluestack-ui-provider/config";

const currentTheme = config.light; // or config.dark

// Inject variables at runtime
for (const key in currentTheme) {
  if (Object.prototype.hasOwnProperty.call(currentTheme, key)) {
    document.documentElement.style.setProperty(key, currentTheme[key]);
  }
}

const preview: Preview = {
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
