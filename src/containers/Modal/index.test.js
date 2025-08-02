/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./index";

describe("When Modal data is created", () => {
  it("must display a modal content", () => {
    render(
      <Modal opened Content={<div>modal content</div>}>
        {() => null}
      </Modal>
    );
    expect(screen.getByText("modal content")).toBeInTheDocument();
  });
});

/**
 * <button data-testid="open-modal" /> 
 * to check
 * eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label 
 */
describe("When a click is triggered to display the modal", () => {
  it.skip("must display the modal content", async () => {
    // Arrange
    render(
      <Modal Content={<div>modal content</div>}>
        {() => <button data-testid="open-modal" />}
      </Modal>
    );
    expect(screen.queryByText("modal content")).not.toBeInTheDocument();
    // Act
    fireEvent(
      screen.getByTestId("open-modal"),
      new MouseEvent("click")
    );
    // Assert
    expect(screen.queryByText("modal content")).toBeInTheDocument();
  });
});

describe("When the close modal button is clicked", () => {
  it("must hide the modal content", async () => {
    // Arrange
    render(
      <Modal opened Content={<div>modal content</div>}>
        {() => null}
      </Modal>
    );

    expect(screen.getByText("modal content")).toBeInTheDocument();
    // Act
    fireEvent(
      screen.getByTestId("close-modal"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    // Assert
    expect(screen.queryByText("modal content")).not.toBeInTheDocument();
  });
});
