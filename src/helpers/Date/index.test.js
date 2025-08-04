import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("then it returns janvier for 2022-01-01 as date", () => {
            // Assert
            expect(/* Act */getMonth(new Date("2022-01-01"))).toBe("janvier")
        });
        it("then it returns juillet for 2022-12-08 as date", () => {
            expect(getMonth(new Date("2022-12-08"))).toBe("décembre")
        });
    });
})

