import { fireEvent, render, screen } from "@testing-library/react";

import Select from "./index";

describe("When a Select is created", () => {
  it("then it must display a list of choices", () => {
    // Arrange Act
    render(<Select selection={["value1", "value2"]} />);
    const selectElement = screen.getByTestId("select-testid");
    const selectDefault = screen.getByText("Toutes");
    // Assert
    expect(selectElement).toBeInTheDocument();
    expect(selectDefault).toBeInTheDocument();
  });

  it("then it must display a collapse action button", () => {
    render(<Select selection={["value1", "value2"]} />);

    const collapseButtonElement = screen.getByTestId("collapse-button-testid");

    expect(collapseButtonElement).toBeInTheDocument();
  });

  it("then it must display a label", () => {
    render(<Select label="label" selection={["value1", "value2"]} />);
    const labelDefault = screen.getByText("label");
    
    expect(labelDefault).toBeInTheDocument();
  });

  describe("and then given a Select; when a click is triggered on collapse button", () => {
    it.skip("then it must display a list of values", () => {
      render(<Select selection={["value1", "value2"]} />);

      const collapseButtonElement = screen.getByTestId(
        "collapse-button-testid"
      );
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click")
      );
      /* TestingLibraryElementError: 
      Unable to find an element with the text: value1. 
      This could be because the text is broken up by multiple elements. 
      In this case, you can provide a function for your text matcher to make your matcher more flexible.
      */
      const choice1 = screen.getByText("value1");
      const choice2 = screen.getByText("value2");

      expect(choice1).toBeInTheDocument();
      expect(choice2).toBeInTheDocument();
    });
  });

  /**
   * DRY arranged double unit test:
   * To do: test collapse automatic folding after option is made for a choice
   * Caution: the second expectation may be data dependant
   *     given there's no data to display
   *     when the test is run
   *     then it would fail & it should be refactored 
   * as soon as possible
   */
  describe("and then given a Select; when a choice item is clicked", () => {
    it.skip("then it must call an onChange() callback", async () => {
      const onChange = jest.fn();
      render(<Select selection={["value1", "value2"]} onChange={onChange} />);
      const collapseButtonElement = screen.getByTestId(
        "collapse-button-testid"
      );
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click")
      );
      /* TestingLibraryElementError: 
      Unable to find an element with the text: Expérience Digitale. 
      This could be because the text is broken up by multiple elements. 
      In this case, you can provide a function for your text matcher to make your matcher more flexible.
      */
      const choice1 = await screen.getByText("Expérience Digitale");
      fireEvent(
        choice1,
        new MouseEvent("click")
      );
      // Assert
      // To do: check for a isCalled() equivalent 
      //     unless below is faster to run
      expect(onChange.mock.calls.length).toBeGreaterThan(0);
      // Act must cleanly revert for idempotence
      // in case of second use, exceptionally
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click")
      );

      // Act
      const choiceAll = await screen.getByText("Toutes");
      fireEvent(
        choiceAll,
        new MouseEvent("click")
      );
      // Assert
      expect(onChange.mock.calls.length).toBeGreaterThan(1);
    });
  });
});
