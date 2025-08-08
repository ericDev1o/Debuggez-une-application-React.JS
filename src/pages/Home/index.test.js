import { fireEvent, render, screen } from "@testing-library/react";

import { DataProvider } from "../../contexts/DataContext";
import Home from "./index";

const home = () => {
  render(
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

describe("When Home is created", () => {
  /* Events */
  it("then it must display events", async () => {
    // Arrange
    home()
    // Act
    const eventstitle = await screen.findAllByText("Nos réalisations")
    const event = await screen.findAllByTestId("card-image-testid")
    // Assert
    expect(eventstitle[1] && event[0]).toBeInTheDocument()
  })

  /* Service */
  it("then it must display services section", () => {
    home()

    const servicesTitle = screen.findAllByText("Nos services")
    const servicesParagraph = screen.findByText("Nous organisons des évènements sur mesure partout dans le monde")

    expect(servicesTitle[1] && servicesParagraph).toBeInTheDocument()
  })

  it(`then given a service card is created
    it must display a unique meaningful alt text instead 
    in case of "Soirée d'entreprise" image data retrieval error`, async () => {
    home();

    const soirees = await screen.findByAltText("dîner d'entreprise"); 
    
    expect(soirees).toBeInTheDocument();
  })

  it(`then given a service card is created
    it must display a unique meaningful alt text instead 
    in case of "Conférences" image data retrieval error`, async () => {
    home();

    const conferences = await screen.findByAltText("hall de conférences"); 
    
    expect(conferences).toBeInTheDocument();
  })

  it(`then given a service card is created
    it must display a unique meaningful alt text instead 
    in case of "Expérience digitale" image data retrieval error`, async () => {
    home();

    const experience = await screen.findByAltText("expérience de réalité virtuelle avec casque"); 
    
    expect(experience).toBeInTheDocument();
  })

  /* People */
  it("then it must display people", async () => {
    home()

    const people = await screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos événements")

    expect(people).toBeInTheDocument()
  })

  /* footer */
  it("then it must display a footer", async () => {
    home()

    const contact = await screen.findByText("Contactez-nous")
    const address = await screen.findByText("45 avenue de la République, 75000 Paris")
    const phone = await screen.findByText("01 23 45 67 89")
    const email = await screen.findByText("contact@724events.com")

    expect(contact && address && phone && email).toBeInTheDocument()
  })
  it("then it must display an event card about the last event in the footer", async () => {
    home()

    const last = await screen.findByText("Notre dernière prestation")
    const smallcard = await screen.findByTestId("card-testid")

    expect(last && smallcard).toBeInTheDocument()
  })

  /* Contact form */
  describe("and then given home is created; when a click is triggered on the submit button", () => {
    it("then it must display a success message", async () => {
      home();
      
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          bubbles: true,
        })
      );
      screen.findByText("En cours");
      const message = await screen.findByText("Message envoyé !");
      
      expect(message).toBeInTheDocument();
    });
  });
});