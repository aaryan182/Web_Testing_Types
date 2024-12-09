import { describe, expect, test } from "@jest/globals";
import { divide, multiply, subtract, sum } from "./index";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("subtract module", () => {
  test("subtracts 2 - 1 to equal 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe("multiply module", () => {
  test("multiply 2 * 3 to equal 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe("divide module", () => {
  test("divide 2 / 1 to equal 2", () => {
    expect(divide(2, 1)).toBe(2);
  });
});
