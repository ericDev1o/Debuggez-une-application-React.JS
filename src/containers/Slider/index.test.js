import { fireEvent, render, screen } from "@testing-library/react";
import { api, DataProvider } from "../../contexts/DataContext";
import Slider from "./index";

/**
 * test unitaire avec
 * data
*/
const data = {
  focus: [
    {
      id: 1,
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id: 2,
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id: 3,
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

/**
 * Utilisation du contexte
 */
const slide = () => {
  api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
}

/**
 * Test d'intégration avec
 * 
 * <DataProvider>
 *     <Slider />
 * </DataProvider>
 * 
 * trouvant d'une part
 *     le texte "janvier" existant dans data 
 * d'autre part
 *     les textes "World economic forum" et
 *     "Oeuvre à la coopération entre le secteur public et le privé."
 */
describe("When Slider is created", () => {
  it("must display at least a card", async () => {
    slide();

    await screen.findByText("World economic forum");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
  it("must paginate", async () => {
    slide();

    await screen.findByText("World Farming Day");
    fireEvent(
      await screen.findByAltText("radio-button-1"),
      new MouseEvent("click")
    );
    await screen.findByText("World economic forum");
  })
});
