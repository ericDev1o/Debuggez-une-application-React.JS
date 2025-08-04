import { render, screen } from "@testing-library/react";
import ServiceCard from "./index";

describe("When a service card is created", () => {
  it("must display an image with alt value", async () => {
    render(
      <ServiceCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text"
      >
        {" "}
      </ServiceCard>
    );
    const imageElement = await screen.getByTestId("card-image-testid");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  it("must display a content", async () => {
    render(
      <ServiceCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text"
      >
        This is the card content
      </ServiceCard>
    );
    const contentElement = await screen.getByText(/This is the card content/);

    expect(contentElement).toBeInTheDocument();
  });
});
