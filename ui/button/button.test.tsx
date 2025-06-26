import { render, screen } from "@testing-library/react-native";
import { Button, ButtonText } from ".";

describe("button component", () => {
  it("renders button text", () => {
    const testText = "Test button";
    render(
      <Button>
        <ButtonText>{testText}</ButtonText>
      </Button>,
    );

    expect(screen.getByText(testText));
  });
});
