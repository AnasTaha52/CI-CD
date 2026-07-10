const { add, subtract, multiply, divide, modulo } = require("../src/math");

// ─────────────────────────────────────────────
// ADD
// ─────────────────────────────────────────────
describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("adds two floating point numbers", () => {
    expect(add(1.1, 2.2)).toBeCloseTo(3.3);
  });
});

// ─────────────────────────────────────────────
// SUBTRACT
// ─────────────────────────────────────────────
describe("subtract()", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller one", () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
});

// ─────────────────────────────────────────────
// MULTIPLY
// ─────────────────────────────────────────────
describe("multiply()", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies two negative numbers (result is positive)", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply(7, 1)).toBe(7);
  });
});

// ─────────────────────────────────────────────
// DIVIDE
// ─────────────────────────────────────────────
describe("divide()", () => {
  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("divides by one (identity)", () => {
    expect(divide(8, 1)).toBe(8);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});

// ─────────────────────────────────────────────
// MODULO
// ─────────────────────────────────────────────
describe("modulo()", () => {
  test("returns remainder of 10 % 3", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns 0 when number is exactly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("works with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("throws an error when modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed");
  });
});
