import { fireEvent, render, screen } from "@testing-library/react";

import Menu from "./index";

describe("When a Menu is created", () => {
  it("then it must display a list of all links", async () => {
    // Arrange Act
    render(<Menu />);
    const services = await screen.findByText("Nos services");
    const events = await screen.findByText("Nos réalisations");
    const team = await screen.findByText("Notre équipe");
    const contact = await screen.findByText("Contact");
    // Assert
    expect(services && events && team && contact).toBeInTheDocument();
  });

  it("then it must display the Logo", async () => {
    render(<Menu />);
    const logo = await screen.findByTitle("Notre logo");

    expect(logo).toBeInTheDocument();
  });
});

describe(`and then given the Menu is created; when 
      user wants to get to any link target 
      by clicking on menu link`
 , () => {
  it("then it must get to services", async () => {
    render(<Menu />);
    fireEvent(
      await screen.findByText("Nos services"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    expect(
      screen.getByText("Nos services").
      closest("a").
      getAttribute("href")).
    toEqual("#nos-services");
  });

  it("then it must get to events", async () => {
    render(<Menu />);
    fireEvent(
      await screen.findByText("Nos réalisations"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    expect(
      screen.getByText("Nos réalisations").
      closest("a").
      getAttribute("href")).
    toEqual("#nos-realisations");
  });

  it("then it must get to team", async () => {
    render(<Menu />);
    fireEvent(
      await screen.findByText("Notre équipe"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    expect(
      screen.getByText("Notre équipe").
      closest("a").
      getAttribute("href")).
    toEqual("#notre-equipe");
  });
  it("then it must get to contact form", async () => {
    render(<Menu />);
    fireEvent(
      await screen.findByText("Contact"),
      new MouseEvent("click", {
        cancelable: true,
        bubbles: true,
      })
    );
    expect(window.document.location.hash).toEqual("#contact");
  });
 });
