import { jest } from "@jest/globals";

import { addAndMultiply } from "../../src";
import add from "../../src/add.js";
import multiply from "../../src/multiply.js";

jest.mock("../../src/add.js", () => jest.fn(() => 2));
jest.mock("../../src/multiply.js", () => jest.fn(() => 3));

describe("add and multiply", () => {
  it("Should call add and multiply functions", () => {
    const result = addAndMultiply(1, 2);
    expect(add).toHaveBeenCalledWith(1, 2);
    expect(multiply).toHaveBeenCalledWith(2, 2);
    expect(result).toBe(3);
  });
});
