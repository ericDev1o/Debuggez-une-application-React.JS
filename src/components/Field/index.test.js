import { fireEvent, render, screen } from "@testing-library/react";

import Field, { FIELD_TYPES } from "./index";

describe("When a Field is created", () => {
  it("then it must set a name", () => {
    // Arrange Act
    render(<Field name="field-name" />);
    const fieldElement = screen.getByTestId("field-testid");
    // Assert
    expect(fieldElement).toBeInTheDocument();
    expect(fieldElement.name).toEqual("field-name");
  });
  it("then it should set a placeholder", () => {
    render(<Field placeholder="field-placeholder" name="test" />);
    const fieldElement = screen.getByTestId("field-testid");

    expect(fieldElement.placeholder).toEqual("field-placeholder");
  });

  it("then it could set a label", () => {
    render(<Field placeholder="field-placeholder" label="field_label" name="test" />);
    const labelElement = screen.getByText(/field_label/);

    expect(labelElement).toBeInTheDocument();
  });

  describe("and then given a Field; when its value changes", () => {
    it.skip("then it must trigger an onChange", () => {
      const onChange = jest.fn();
      render(<Field onChange={onChange} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      fireEvent(
        fieldElement,
        new MouseEvent("click", {
          bubbles: true,
        })
      );

      expect(onChange).toHaveBeenCalled();
    });
  });

  describe("and then given a Field; when its type is set to FIELD_TYPES.INPUT_TEXT", () => {
    it("then it must render a text input", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning

      render(<Field type={FIELD_TYPES.INPUT_TEXT} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("text");
    });
  });

  describe("and then given a Field; when its type is set to FIELD_TYPES.TEXTAREA", () => {
    it("then it must render a textarea", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning

      render(<Field type={FIELD_TYPES.TEXTAREA} name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("textarea");
    });
  });

  describe("and then given a Field; when its type is set to a wrong value", () => {
    it("then it should render a text input", () => {
      window.console.error = jest.fn().mockImplementation(() => null); // disable propTypes warning
      
      render(<Field type="wrong-type" name="test" />);
      const fieldElement = screen.getByTestId("field-testid");

      expect(fieldElement.type).toEqual("text");
    });
  });
});
