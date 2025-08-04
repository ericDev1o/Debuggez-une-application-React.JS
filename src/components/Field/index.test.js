import { fireEvent, render, screen } from "@testing-library/react";

import Field, { FIELD_TYPES } from "./index";

describe("When Field is created", () => {
  it("then it must set a name on the field", () => {
    render(<Field name="field-name" />);

    const fieldElement = screen.getByTestId("field-testid");

    expect(fieldElement).toBeInTheDocument();
    expect(fieldElement.name).toEqual("field-name");
  });

  it("then it could set a placeholder", () => {
    render(<Field placeholder="field-placeholder" name="test" />);

    const fieldElement = screen.getByTestId("field-testid");

    expect(fieldElement.placeholder).toEqual("field-placeholder");
  });

  it("then it should set a label with field", () => {
    render(<Field placeholder="field-placeholder" label="field_label" name="test" />);

    expect(screen.getByText(/field_label/)).toBeInTheDocument();
  });

  describe("and then when its value changed", () => {
    it.skip("it must trigger an onChange", () => {
      const onChange = jest.fn();
      render(<Field onChange={onChange} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");
      fireEvent(
        fieldElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(onChange).toHaveBeenCalled();
    });
  });

  describe("and then when its type is set to FIELD_TYPES.INPUT_TEXT", () => {
    it("it must render a text input", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning
      render(<Field type={FIELD_TYPES.INPUT_TEXT} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("text");
    });
  });

  describe("and then when its type is set to FIELD_TYPES.TEXTAREA", () => {
    it("it must render a textarea", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning
      render(<Field type={FIELD_TYPES.TEXTAREA} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("textarea");
    });
  });

  describe("and then when its type is set to a wrong value", () => {
    it("then it should render a text input", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning
      render(<Field type="wrong-type" name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("text");
    });
  });
});
