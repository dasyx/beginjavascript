import { calculator } from "./calculator.js";
import { prompt } from "./helper.js";

jest.mock("./helper.js");

describe("Calculator", () => {
  it("should add two numbers", async () => {
    prompt
      .mockResolvedValueOnce("1")
      .mockResolvedValueOnce("5")
      .mockResolvedValueOnce("3");
    const result = await calculator();
    expect(result).toBe(8);
  });

  it("should subtract two numbers", async () => {
    prompt
      .mockResolvedValueOnce("2")
      .mockResolvedValueOnce("5")
      .mockResolvedValueOnce("3");
    const result = await calculator();
    expect(result).toBe(2);
  });

  it("should divide two numbers", async () => {
    prompt
      .mockResolvedValueOnce("3")
      .mockResolvedValueOnce("6")
      .mockResolvedValueOnce("3");
    const result = await calculator();
    expect(result).toBe(2);
  });

  it("should multiply two numbers", async () => {
    prompt
      .mockResolvedValueOnce("4")
      .mockResolvedValueOnce("5")
      .mockResolvedValueOnce("3");
    const result = await calculator();
    expect(result).toBe(15);
  });

  // Vous pouvez ajouter d'autres tests pour les cas d'erreur, comme un opérateur invalide, une division par zéro, etc.
});
