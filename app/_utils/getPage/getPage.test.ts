import { ROOT_URL } from "@utils/constants";
import { getPage } from ".";

describe("getPage", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should fetch page from Umbraco", async () => {
    // Mock the response from the fetch call
    const mockResponse = {
      data: {
        // Mocked page data
        // Add your desired mock response here
      },
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    // Mock the fetch function to return the mock response
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);
    // Call the getPage function
    const result = await getPage(["slug"]);
    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/slug`, {
      next: { tags: [] },
    });
    // Assert that the result matches the expected mock response
    expect(result).toEqual(mockResponse);
  });

  it("should handle errors when fetching page", async () => {
    const mockError = new Error("Fetch error");
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(mockError);
    // Call the getPage function
    await expect(getPage(["slug"])).rejects.toThrow(mockError);
    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/slug`, {
      next: { tags: [] },
    });
  });

  it("should provide tag when not in local environment", async () => {
    process.env.ENVIRONMENT_NAME = "test";
    // Mock the response from the fetch call
    const mockResponse = {
      data: {
        // Mocked page data
        // Add your desired mock response here
      },
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    // Mock the fetch function to return the mock response
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);
    // Call the getPage function
    await getPage(["slug"]);
    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/slug`, {
      next: { tags: ["theme", "page-slug"] },
    });
  });
});
