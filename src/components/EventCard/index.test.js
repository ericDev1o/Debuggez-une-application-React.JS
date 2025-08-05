import { render, screen } from "@testing-library/react";

import EventCard from "./index";

describe("When an EventCard is created", () => {
  it("then it must display an image with alt value", async () => {
    // Arrange Act
    render(
      <EventCard 
        imageSrc="http://src-image" 
        imageAlt="Notre dernière prestation" 
        date={new Date("2022-04-01")} 
        title="test event"
        label="test label"
    />);
    const imageElement = await screen.getByTestId("card-image-testid");
      // Assert
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("Notre dernière prestation");
  });

  it("then it must display a title & a label & a month", async () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
      />
    );
    const titleElement = await screen.getByText(/test event/);
    const monthElement = await screen.getByText(/avril/);
    const labelElement = await screen.getByText(/test label/);

    expect(titleElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(monthElement).toBeInTheDocument();
  });
});

describe("and then when EventCard has small prop", () => {
  it("then it must postfix to className a modifier --small", async () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="Notre dernière prestation"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
        small
      />
    );
    const cardElement = await screen.getByTestId("card-testid");

    expect(cardElement.className.includes("EventCard--small")).toBeTruthy();
  });
});
