import { fireEvent, render, screen } from "@testing-library/react";

import { api, DataProvider } from "../../contexts/DataContext";
import Slider from "./index";

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

const slide = () => {
  api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
}

describe("When a Slider is created", () => {
  it("then it must display at least a card", async () => {
    // Arrange
    slide();
    // Act
    const title = await screen.findByText("World economic forum");
    const description = await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
    // Assert
    expect(title && description).toBeInTheDocument();
  });
  it("then it must paginate", async () => {
    slide();

    await screen.findByText("World Farming Day");
    fireEvent(
      await screen.findByAltText("radio-button-1"),
      new MouseEvent("click")
    );
    
    expect(await screen.findByText("World economic forum")).toBeInTheDocument();
  })
});
