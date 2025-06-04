import { GluestackUIProvider } from "../components/gluestack-ui-provider";
import { config as themeConfig } from "../components/gluestack-ui-provider/config";
const injectCssVars = (theme: "light" | "dark") => {
  const vars = themeConfig[theme];
  for (const key in vars) {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
      document.documentElement.style.setProperty(key, vars[key]);
    }
  }
};

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme || "light";

  injectCssVars(theme);

  return (
    <GluestackUIProvider mode={theme}>
      <Story />
    </GluestackUIProvider>
  );
};

export default withThemeProvider;
