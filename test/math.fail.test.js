/**
 * math.fail.test.js
 *
 * These tests are INTENTIONALLY WRONG to demonstrate what a CI/CD pipeline
 * failure looks like. Each test shows a different type of common bug.
 *
 * ❌ = Intentional failure | 💡 = Lesson being taught
 */

const { add, subtract, multiply, divide, modulo } = require("../src/math");

// ─────────────────────────────────────────────────────────────
// FAILURE TYPE 1: Wrong Expected Value (Logic Error)
// The developer made an arithmetic mistake in the test itself.
// ─────────────────────────────────────────────────────────────
describe("❌ FAIL: Wrong expected values (logic errors)", () => {
  test("add(2, 3) should be 6 — WRONG: actual result is 5", () => {
    // 💡 The developer miscalculated. CI catches this immediately.
    expect(add(2, 3)).toBe(6); // BUG: 2+3=5, not 6
  });

  test("subtract(10, 4) should be 5 — WRONG: actual result is 6", () => {
    // 💡 Off-by-one error, very common in real code.
    expect(subtract(10, 4)).toBe(5); // BUG: 10-4=6, not 5
  });

  test("multiply(3, 4) should be 11 — WRONG: actual result is 12", () => {
    // 💡 Typo in expected value.
    expect(multiply(3, 4)).toBe(11); // BUG: 3*4=12, not 11
  });
});

// ─────────────────────────────────────────────────────────────
// FAILURE TYPE 2: Wrong Type / Precision Issue
// The function returns a number but the test expects a string.
// ─────────────────────────────────────────────────────────────
describe("❌ FAIL: Type mismatch errors", () => {
  test("add(1, 2) returns a string '3' — WRONG: it returns number 3", () => {
    // 💡 toBe uses strict equality (===). "3" !== 3.
    expect(add(1, 2)).toBe("3"); // BUG: result is number 3, not string "3"
  });

  test("divide(1, 3) should equal exactly 0.333 — WRONG: use toBeCloseTo", () => {
    // 💡 Floating point precision: 1/3 = 0.3333333... not exactly 0.333
    // Use toBeCloseTo() for floats, never toBe()
    expect(divide(1, 3)).toBe(0.333); // BUG: floating point precision issue
  });
});

// ─────────────────────────────────────────────────────────────
// FAILURE TYPE 3: Wrong Assumption About Error Handling
// The test expects an error, but the wrong message is checked.
// ─────────────────────────────────────────────────────────────
describe("❌ FAIL: Incorrect error message expectation", () => {
  test("divide by zero throws wrong error message", () => {
    // 💡 The actual message is "Division by zero is not allowed"
    //    but the test checks for a different string.
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero"); // BUG: wrong message
  });

  test("modulo by zero throws wrong error message", () => {
    // 💡 Same lesson — error messages must match exactly.
    expect(() => modulo(5, 0)).toThrow("Mod by zero"); // BUG: wrong message
  });
});

// ─────────────────────────────────────────────────────────────
// FAILURE TYPE 4: Assuming an Error is Thrown When It Isn't
// The test expects a crash, but the function handles it fine.
// ─────────────────────────────────────────────────────────────
describe("❌ FAIL: Expecting an error that doesn't happen", () => {
  test("add() throws an error for negative numbers — WRONG: it doesn't", () => {
    // 💡 The developer incorrectly assumed negative inputs are invalid.
    //    add() handles negatives just fine.
    expect(() => add(-1, -2)).toThrow(); // BUG: no error is thrown
  });

  test("multiply() throws an error when result is 0 — WRONG: it doesn't", () => {
    // 💡 multiply(5, 0) = 0 is perfectly valid. No error thrown.
    expect(() => multiply(5, 0)).toThrow(); // BUG: no error is thrown
  });
});

// ─────────────────────────────────────────────────────────────
// FAILURE TYPE 5: Comparison Direction Mistake
// The arguments to expect() are swapped.
// ─────────────────────────────────────────────────────────────
describe("❌ FAIL: Inverted assertion (received vs expected swapped)", () => {
  test("subtract result placed in wrong order", () => {
    // 💡 subtract(10, 3) = 7. But here the result (7) is being compared
    //    against the call itself — easy mistake that misleads the error message.
    const result = subtract(10, 3);
    expect(10).toBe(result); // BUG: 10 !== 7, arguments are swapped in thinking
  });
});
