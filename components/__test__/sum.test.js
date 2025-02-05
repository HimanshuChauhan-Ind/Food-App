import { sum } from "../sum";

test("Just a basic JS function test", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
