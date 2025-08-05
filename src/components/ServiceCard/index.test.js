import { render, screen } from "@testing-library/react";

import ServiceCard from "./index";

describe("When a ServiceCard is created", () => {
  it("then it must display an image with alt value", async () => {
    // Arrange Act
    render(
      <ServiceCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text"
      >
        {" "}
      </ServiceCard>
    );
    const imageElement = await screen.getByTestId("card-image-testid");
    // Assert
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  it("then it must display a content", async () => {
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
