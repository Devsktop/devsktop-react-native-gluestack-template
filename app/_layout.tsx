import { Box } from "@/components/box";
import { Button, ButtonText } from "@/components/button";
import { GluestackUIProvider } from "@/components/gluestack-ui-provider";
import "@/global.css";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";

import "react-native-reanimated";

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="system">
      <Box className="flex flex-1 bg-background-0">
        <Box className="flex flex-row justify-center p-5 align-middle">
          <Button
            onPress={() =>
              setColorScheme(colorScheme === "light" ? "dark" : "light")
            }
          >
            <ButtonText>Hello world</ButtonText>
          </Button>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
}
