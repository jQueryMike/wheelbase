import capitalise from "./capitalise";

describe("capitalise", () => {
  it("should capitalise the first letter of a string", () => {
    const result = capitalise("hello");
    expect(result).toBe("Hello");
  });

  it("should not change the capitalisation of the rest of the string", () => {
    const result = capitalise("wORLD");
    expect(result).toBe("WORLD");
  });

  it("should return an empty string if the input is empty", () => {
    const result = capitalise("");
    expect(result).toBe("");
  });

  it("should return the same string if the first character is already capitalised", () => {
    const result = capitalise("Hello");
    expect(result).toBe("Hello");
  });

  it("should handle strings with special characters", () => {
    const result = capitalise("!@#$%^&*()");
    expect(result).toBe("!@#$%^&*()");
  });
});
