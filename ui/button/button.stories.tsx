import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { Button, ButtonText } from ".";
import { Box } from "../box";

const meta = {
  title: "UI/Button",
  component: Button,
  render: (args) => (
    <Box>
      <Button {...args}>
        <ButtonText>Hello World</ButtonText>
      </Button>
    </Box>
  ),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    action: "negative",
  },
};
