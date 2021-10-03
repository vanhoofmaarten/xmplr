import add from "../../src/add.js";

describe("add", () => {
  it("Should add two numbers together", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
