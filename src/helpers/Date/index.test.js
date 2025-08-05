import { getMonth } from "./index";

describe("When Date helper getMonth is called", () => {
    it("then it must return janvier for 2022-01-01", () => {
        // Assert
        expect(/* Act */getMonth(new Date("2022-01-01"))).toBe("janvier")
    });
    it("then it must return juillet for 2022-12-08", () => {
        expect(getMonth(new Date("2022-12-08"))).toBe("décembre")
    });
});
