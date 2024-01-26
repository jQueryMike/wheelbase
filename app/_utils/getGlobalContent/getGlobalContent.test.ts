import { getGlobalContent } from "./getGlobalContent";

describe("getGlobalContent", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should fetch global content from Umbraco", async () => {
    // Mock the response from the Umbraco API
    const mockResponse = {
      // Add your mock response data here
    };

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the getGlobalContent function
    const result = await getGlobalContent();

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/shared-content",
      { next: { tags: [] } }
    );

    // Assert that the result matches the expected mock response
    expect(result).toEqual(mockResponse);
  });

  it("should handle errors when fetching global content", async () => {
    const mockError = new Error("Fetch error");
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(mockError);

    // Call the getGlobalContent function
    await expect(getGlobalContent()).rejects.toThrow(mockError);

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/shared-content",
      { next: { tags: [] } }
    );
  });

  it("should provide tag when not in local environment", async () => {
    process.env.ENVIRONMENT_NAME = "test";
    // Mock the response from the Umbraco API
    const mockResponse = {
      // Add your mock response data here
    };

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the getGlobalContent function
    const result = await getGlobalContent();

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:30590/umbraco/delivery/api/v1/content/item/shared-content",
      { next: { tags: ["shared-content"] } }
    );

    // Assert that the result matches the expected mock response
    expect(result).toEqual(mockResponse);
  });
});
