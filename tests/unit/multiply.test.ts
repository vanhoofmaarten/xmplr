import multiply from "../../src/multiply.js";

describe("multiply", () => {
  it("Should multiply two numbers together", () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });
});
