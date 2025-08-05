/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { fireEvent, render, screen } from "@testing-library/react";

import Modal from "./index";

describe("When a Modal is created and opened", () => {
  it("then it must display a modal content", () => {
    // Arrange Act
    render(
      <Modal opened Content={<div>modal content</div>}>
        {() => null}
      </Modal>
    );
    // Assert
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
  it.skip("then it must display the modal content", async () => {
    // Arrange
    render(
      <Modal Content={<div>modal content</div>}>
        {() => <button data-testid="open-modal" />}
      </Modal>
    );
    expect(await screen.getByText("modal content")).not.toBeInTheDocument();
    // Act
    fireEvent(
      screen.getByTestId("open-modal"),
      new MouseEvent("click")
    );
    // Assert
    expect(await screen.findByText("modal content")).toBeInTheDocument();
  });

  describe("and then given Modal is open; when the close modal button is clicked", () => {
    it.skip("then it must close the modal", async () => {
      // Arrange
      render(
        <Modal opened Content={<div>modal content</div>}>
          {() => <button data-testid="close-modal" />}
        </Modal>
      );
      expect(screen.getByText("modal content")).toBeInTheDocument();
      // Act
      fireEvent(
        await screen.getAllByTestId("close-modal")[1],
        new MouseEvent("click")
      );
      // Assert
      expect(screen.queryByText("modal content")).not.toBeInTheDocument();
    });
  });
});