import { Box } from "@/components/box";
import { Button, ButtonText } from "@/components/button";
import { GluestackUIProvider } from "@/components/gluestack-ui-provider";
import "@/global.css";
import { useFonts } from "expo-font";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <Box className="flex flex-row justify-center align-middle p-5">
        <Button>
          <ButtonText>Hello world</ButtonText>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
}
