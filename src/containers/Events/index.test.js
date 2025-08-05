import { fireEvent, render, screen } from "@testing-library/react";

import { api, DataProvider } from "../../contexts/DataContext";
import Events from "./index";

const data = {
  events: [
    {
      id: 1,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },

    {
      id: 2,
      type: "forum",
      date: "2022-04-29T20:28:45.744Z",
      title: "Forum #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition", 
        "1 scéne principale"],
    },
  ],
};

/**
 * DRY
 * @param {string} mock is 
 * rejected for RejectedValue (data can't be fetched) or
 * return for ReturnValue (data is fetched)
 */
const events = (mock) => {
  if(mock === "rejected")
    api.loadData = jest.fn().mockRejectedValue(data);
  else if(mock === "return")
    api.loadData = jest.fn().mockReturnValue(data);
  render(
    (<DataProvider>
      <Events />
    </DataProvider>)
  )
}

describe("When Events is created", () => {
  it("then it must display a list of big event cards", async () => {
    // Arrange
    events("return");
    // Act
    await screen.findAllByText("avril");
    // Assert
    expect(screen.queryAllByText("avril")).not.toHaveLength(0);
  });

  describe("and then given Events is created; when a category is selected", () => {
    it.skip("then it must display a filtered list", async () => {
      events("return");

      await screen.findByText("Forum #productCON");

      fireEvent(
        await screen.findByTestId("collapse-button-testid"),
        new MouseEvent("click")
      );
      fireEvent(
        (await screen.findAllByText("soirée entreprise"))[0],
        new MouseEvent("click")
      );

      await screen.findByText("Conférence #productCON");

      expect(screen.queryByText("soirée entreprise")).toBeInTheDocument();
      expect(screen.queryByText("Forum #productCON")).not.toBeInTheDocument();// not filtered
    });

    /**
     * ModalEvent integration test
     *  
     * bubbles: true for future flexibility.
     */
    describe("and then given a category is selected; when an event is clicked", () => {
      it("must display the event detail", async () => {
        events("return");

        fireEvent(
          await screen.findByText("Conférence #productCON"),
          new MouseEvent("click", {
            bubbles: true,
          })
        );
        await screen.findByText("Présentation des outils analytics aux professionnels du secteur");
        await screen.findByText("1 site web dédié");

        expect(
          screen.queryByText("Présentation des outils analytics aux professionnels du secteur")
        ).toBeInTheDocument();
        expect(screen.queryByText("1 site web dédié")).toBeInTheDocument();
      });
    });
  });

  describe("and then given Events is created; when an error occured", () => {
    it("then it must display an error message", async () => {
      events("rejected");

      expect(await screen.findByText("An error occured")).toBeInTheDocument();
    });
  });
});
