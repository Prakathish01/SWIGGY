import { sum } from "../sum";
import "@testing-library/jest-dom";
test("Sum function to check the value is correct or not", () => {
  const result = sum(5, 9);
  expect(result).toBe(14);
});

