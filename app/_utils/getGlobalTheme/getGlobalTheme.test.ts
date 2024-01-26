import { getGlobalTheme } from "./getGlobalTheme";

describe("getGlobalTheme", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return the global theme", async () => {
    const mockResponse = {
      theme: "dark",
      primaryColor: "#000000",
      secondaryColor: "#ffffff",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getGlobalTheme();

    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/test-site/theme",
      { next: { tags: [] } }
    );
  });

  it("should handle fetch error", async () => {
    const mockError = new Error("Fetch error");

    global.fetch = jest.fn().mockRejectedValue(mockError);

    await expect(getGlobalTheme()).rejects.toThrow(mockError);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/test-site/theme",
      { next: { tags: [] } }
    );
  });

  it("should provide tag when not in local environment", async () => {
    process.env.ENVIRONMENT_NAME = "test";
    const mockResponse = {
      theme: "dark",
      primaryColor: "#000000",
      secondaryColor: "#ffffff",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getGlobalTheme();

    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/test-site/theme",
      { next: { tags: ["theme"] } }
    );
  });
});
