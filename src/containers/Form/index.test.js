import { fireEvent, render, screen } from "@testing-library/react";

import Form from "./index";

describe("When a Form is created", () => {
  it.skip("then it must display a list of field cards", async () => {
    // Arrange
    render(<Form />);
    // Act
    const email = await screen.findByText("Email");
    const name = await screen.findByText("Nom");
    const firstname = await screen.findByText("Prénom");
    const type = await screen.findByText("Personel / Entreprise");
    // Assert
    expect(email && name && firstname && type).toBeInTheDocument();
  });

  describe("and then given Form is created; when a click is triggered on the submit button", () => {
    it("then it must call success", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);

      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");

      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
