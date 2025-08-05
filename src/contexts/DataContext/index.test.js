import { render, screen } from "@testing-library/react";
import { DataProvider, api, useData } from "./index";

describe("When a DataContext is created", () => {
  it("then it must fetch data and keep it displayed to final user", async () => {
    // Arrange
    api.loadData = jest.fn().mockReturnValue({ result: "ok" });
    const Component = () => {
      const { data } = useData();
      return <div>{data?.result}</div>;
    };
    // Act
    render(
      <DataProvider>
        <Component />
      </DataProvider>
    );
    const dataDisplayed = await screen.findByText("ok");
    // Assert
    expect(dataDisplayed).toBeInTheDocument();
  });
  describe("and then given data context is created; when a new events fetch failed", () => {
    it("then it must keep trace of an error in the calling component", async () => {
      window.console.error = jest.fn();
      api.loadData = jest.fn().mockRejectedValue("error on calling events");
      const Component = () => {
        const { error } = useData();
        return <div>{error}</div>;
      };
      
      render(
        <DataProvider>
          <Component />
        </DataProvider>
      );
      const errorDisplayed = await screen.findByText("error on calling events");

      expect(errorDisplayed).toBeInTheDocument();
    });
  });
  it.skip("then it must fetch up to date data", async () => {
    // window.console.error = jest.fn();
    const eventTitle = "Conférence #productCON";
    const eventDescription = "Présentation des outils web aux pros";
    const focusTitle = "Webfest";
    const focusDescription = "New React keynote";
    global.fetch = jest.fn().mockResolvedValue(() =>
      Promise.resolve({
        json: () => Promise.resolve(
        { 
          events: [{
            id: 19, 
            type: "conférence",
            title: {eventTitle},
            description: {eventDescription},
          }],
          focus: [{
            id: 4,
            title: {focusTitle},
            description: {focusDescription},
          }] 
        }),
      })
    );
    const dataFetched = await fetch();
    const Component = () => {
      const { data } = dataFetched;
      const events = data?.events;
      const focus = data?.focus;
      return <article>
        <section>
          <h2>{events[0]?.title}</h2>
          <p>{events[0]?.description}</p>
        </section>
        <section>
          <h2>{focus[0]?.title}</h2>
          <p>{focus[0]?.description}</p>
        </section>
      </article>;
    };
    render(
      <DataProvider>
        <Component />
      </DataProvider>
    );
    /* const evtTitle = await screen.findByText(eventTitle);
    const evtDescr = await screen.findByText(eventDescription);
    const focusTitl = await screen.findByText(focusTitle);
    const focusDescr = await screen.findByText(focusDescription); */

    await expect(dataFetched.events[0].type).resolves("conférence");
    await expect(dataFetched.events.length).toBeGreaterThanOrEqual(1);
    await expect(dataFetched.focus.length).toBeGreaterThanOrEqual(1);
    // expect(evtTitle && evtDescr && focusTitl && focusDescr).toBeInTheDocument();
  });
});
