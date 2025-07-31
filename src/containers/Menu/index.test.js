import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("must display a list of all links", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });
});

describe(`& when 
      user wants to get 
      to any link target 
      by clicking on menu link
    then it must follow it 
      until destination content is displayed`
 , () => {
  it("must get to services", async () => {
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
  it("... must get to contact form", async () => {
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
  it("should display Logo", async () => {
    render(<Menu />);
    expect(screen.findAllByAltText("Notre logo")).toBeTruthy();
  });
 });
