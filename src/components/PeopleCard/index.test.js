import { render, screen } from "@testing-library/react";
import PeopleCard from "./index";

describe("When a people card is created", () => {
  it("must display an image with alt value", async () => {
    render(
      <PeopleCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text" 
        name="test name"
        position="test position" />
    );
    const imageElement = await screen.getByTestId("card-image-testid");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  it("must display a title and a month", async () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = await screen.getByText(/test name/);
    const titleElement = await screen.getByText(/test position/);

    expect(nameElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
