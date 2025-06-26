import "@/global.css";
import { Box } from "@/ui/box";
import { Button, ButtonText } from "@/ui/button";
import { GluestackUIProvider } from "@/ui/gluestack-ui-provider";
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
            variant="solid"
            action="positive"
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
