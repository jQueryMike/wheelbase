import getKeys from "./getKeys";

describe("getKeys", () => {
  it("should return an array of nested keys", () => {
    expect(getKeys("tabName_blockName_property")).toEqual([
      "tabName",
      "blockName",
      "property",
    ]);
    expect(getKeys("foo_bar_baz")).toEqual(["foo", "bar", "baz"]);
    expect(getKeys("a_b_c_d_e")).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("should handle empty string input", () => {
    expect(getKeys("")).toEqual([]);
  });

  it("should handle single key input", () => {
    expect(getKeys("key")).toEqual(["key"]);
  });

  it("should handle input with leading and trailing underscores", () => {
    expect(getKeys("_key_")).toEqual(["key"]);
  });

  it("should handle input with consecutive underscores", () => {
    expect(getKeys("a__b")).toEqual(["a", "b"]);
  });

  it("should handle input with underscores at the beginning and end of each key", () => {
    expect(getKeys("_a__b_")).toEqual(["a", "b"]);
  });
});
