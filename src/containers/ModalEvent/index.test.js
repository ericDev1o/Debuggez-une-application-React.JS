import { render, screen } from "@testing-library/react";

import ModalEvent from "./index";

const data = {
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
    "1 scene principale",
    "2 espaces de restaurations",
    "1 site web dédié",
  ],
};

describe("When a ModalEvent is created", () => {
  it("it must display its event data passed by prop", async () => {
    // Arrange Act
    render(<ModalEvent event={data} />);
    // Assert
    expect(await screen.findByText(
      "Présentation des outils analytics aux professionnels du secteur"
    )).toBeInTheDocument();
  });
});
