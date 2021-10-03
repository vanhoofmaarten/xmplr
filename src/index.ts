import add from "./add.js";
import multiply from "./multiply.js";

export const addAndMultiply = (first: number, second: number) =>
  multiply(add(first, second), second);
