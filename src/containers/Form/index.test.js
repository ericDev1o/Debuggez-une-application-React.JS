import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Form is created", () => {
  it("then it must display the minimal set of fields", async () => {
    render(<Form />);
    const email = await screen.findByText("Email *");
    const name = await screen.findByText("Nom *");
    const firstname = await screen.findByText("Prénom");
    const type = await screen.findByText("Personel / Entreprise *");

    expect(email && name && firstname && type).toBeInTheDocument();
  });
});

describe("When a click is triggered on the submit button", () => {
  it("then it must call the success action", async () => {
    // Arrange
    const onSuccess = jest.fn();
    render(<Form onSuccess={onSuccess} />);
    // Act
    fireEvent(
      await screen.findByTestId("button-test-id"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    await screen.findByText("En cours");
    await screen.findByText("Envoyer");
    // Assert
    expect(onSuccess).toHaveBeenCalled();
  });
});
