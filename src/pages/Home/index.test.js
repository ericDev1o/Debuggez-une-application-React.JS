import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import { DataProvider } from "../../contexts/DataContext";

const home = () => {
  render(
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

describe("When Form is created", () => {
  describe("and then when a click is triggered on the submit button", () => {
    it("then it must display a success message", async () => {
      // Arrange
      home();
      // Act
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      const message = await screen.findByText("Message envoyé !");
      // Assert
      expect(message).toBeInTheDocument();
    });
  });
});


describe("When a page is created", () => {
  it.skip("a list of events is displayed", () => {
    // to implement
  })
  it.skip("a list a people is displayed", () => {
    // to implement
  })
  it.skip("a footer is displayed", () => {
    // to implement
  })
  it.skip("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
