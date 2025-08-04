import { fireEvent, render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPES } from "./index";

describe("When a button is created", () => {
  it("then it must include a title", () => {
    // Arrange
    render(<Button title="my-button" type={BUTTON_TYPES.DEFAULT} />);
    // Act
    const buttonElement = screen.getByTitle("my-button");
    // Assert
    expect(buttonElement).toBeInTheDocument();
  });

  it("then it must display a label", () => {
    render(<Button>label</Button>);

    const buttonElement = screen.getByText(/label/);

    expect(buttonElement).toBeInTheDocument();
  });

  /**
   * Bubbles: true passes it
   */
  describe("and then it's clicked", () => {
    it("then it must trigger an onClick event", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);
      const buttonElement = screen.getByTestId("button-test-id");

      fireEvent(
        buttonElement,
        new MouseEvent("click", {
          bubbles: true
        })
      );

      expect(onClick.mock.calls.length).toBeGreaterThan(0);
    });
  });

  describe("and then it's a submit type button", () => {
    it("then it must create a submit input", () => {
      render(<Button type={BUTTON_TYPES.SUBMIT}>label</Button>);

      const buttonElement = screen.getByTestId("button-test-id");

      expect(buttonElement.type).toEqual("submit");
    });
  });
});
