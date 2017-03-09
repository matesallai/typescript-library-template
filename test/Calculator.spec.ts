import Calculator from "../src/Calculator/Calculator";

describe("Calculator.Sum function",
    () => {
        it("Should add 2 numbers correctly",
            () => {
                let calculator = new Calculator();

                expect(calculator.sum(1, 2)).toEqual(3);
            });
    });