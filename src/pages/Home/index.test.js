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
    const eventsTitle = screen.getAllByText("Nos réalisations")
    const event = await screen.findAllByTestId("card-image-testid")
    // Assert
    /* eventsTitle[0] is in the header nav */
    expect(eventsTitle[1] && event[0]).toBeInTheDocument()
  })

  /* Service */
  it("then it must display services section", () => {
    home()

    const servicesTitle = screen.getAllByText("Nos services")
    const servicesParagraph = screen.getByText("Nous organisons des évènements sur mesure partout dans le monde")

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
  it("then it must display people section", () => {
    home()

    const peopleTitle = screen.getAllByText("Notre équipe")
    const peopleParagraph = screen.getByText("Une équipe d’experts dédiés à l’organisation de vos évènements")

    expect(peopleTitle[1] && peopleParagraph).toBeInTheDocument()
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of CEO image data retrieval error`, async () => {
    home();

    const CEO = await screen.findByAltText("Notre CEO Samira"); 
    
    expect(CEO).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of "Directeur Marketing" image data retrieval error`, async () => {
    home();

    const DM = await screen.findByAltText("Notre directeur marketing Jean-Baptiste"); 
    
    expect(DM).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of CEO image data retrieval error`, async () => {
    home();

    const CEO = await screen.findByAltText("Notre CEO Samira"); 
    
    expect(CEO).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of CXO image data retrieval error`, async () => {
    home();

    const CXO = await screen.findByAltText("Notre CXO Alice"); 
    
    expect(CXO).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of "Animateur" image data retrieval error`, async () => {
    home();

    const A = await screen.findByAltText("Notre animateur Luis"); 
    
    expect(A).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of "VP Animation" image data retrieval error`, async () => {
    home();

    const VPA = await screen.findByAltText("Notre VP animation Christine"); 
    
    expect(VPA).toBeInTheDocument();
  })

  it(`then given a people card is created
    it must display a unique meaningful alt text instead 
    in case of "VP Communication" image data retrieval error`, async () => {
    home();

    const VPC = await screen.findByAltText("Notre VP communication Isabelle"); 
    
    expect(VPC).toBeInTheDocument();
  })

  /* footer */
  it("then it must display a footer", () => {
    home()

    const contact = screen.getByText("Contactez-nous")
    const address = screen.getByText("45 avenue de la République, 75000 Paris")
    const phone = screen.getByText("01 23 45 67 89")
    const email = screen.getByText("contact@724events.com")

    expect(contact && address && phone && email).toBeInTheDocument()
  })
  it("then it must display an event card about the last event in the footer", async () => {
    home()

    const last = screen.getByText("Notre dernière prestation")
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
      const message = await screen.findByText("Message envoyé !");
      
      expect(message).toBeInTheDocument();
    });
  });
});