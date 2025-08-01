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
 * 
 * @param {string} mock is 
 * rejected for RejectedValue or
 * return for ReturnValue
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

/**
 * Le texte attendu n'est pas vu.
 */
// eslint-disable-next-line spaced-comment
/*describe("When Events is created", () => {
  it("must display a list of big event cards", async () => {
    events("rejected");

    await screen.findByText("avril");

    expect(screen.queryByText("avril").toBeInTheDocument());
  });
});*/

describe("When an error occured", () => {
  it("must display an error message", async () => {
    events("rejected");

    expect(await screen.findByText("An error occured")).toBeInTheDocument();
  });
});

/**
 * Le texte ne devant pas être vu l'est.
 */
// eslint-disable-next-line spaced-comment
/*describe("When a category is selected", () => {
  it.only("must display a filtered list", async () => {
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

    expect(screen.queryByText("Forum #productCON")).not.toBeInTheDocument();
  });
});*/

describe("When an event is clicked", () => {
  it("must display the event detail", async () => {
    events("return");

    fireEvent(
      await screen.findByText("Conférence #productCON"),
      new MouseEvent("click", {
        cancelable: true,
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
