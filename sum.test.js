const sum = require("./sum")

test('adds parameters when both are supplied at once', () => {
  expect(false).toBe(true);
});

test('adds 1 + 2 with parameters applied once per function call', () => {
  expect(false).toBe(true);
});

// @ponicode
describe("sum", () => {
    test("0", () => {
        let callFunction = () => {
            sum(-1, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sum(1, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sum(0.0, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sum(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sum(1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sum(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
