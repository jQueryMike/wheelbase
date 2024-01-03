import { getGlobalConfig } from "./getGlobalConfig";
import { ROOT_URL } from "@utils/constants";

describe("getGlobalConfig", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should fetch global config from Umbraco", async () => {
    // Mock the response from the fetch call
    const mockResponse = {
      data: {
        // Mocked global config data
        // Add your desired mock response here
      },
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    // Mock the fetch function to return the mock response
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);

    // Call the getGlobalConfig function
    const result = await getGlobalConfig();

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/global-config`, {
      next: { tags: [] },
    });

    // Assert that the result matches the expected mock response
    expect(result).toEqual(mockResponse);
  });

  it("should handle errors when fetching global config", async () => {
    const mockError = new Error("Fetch error");
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(mockError);

    // Call the getGlobalConfig function
    await expect(getGlobalConfig()).rejects.toThrow(mockError);

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/global-config`, {
      next: { tags: [] },
    });
  });

  it("should provide tag when not in local environment", async () => {
    process.env.ENVIRONMENT_NAME = "test";
    // Mock the response from the fetch call
    const mockResponse = {
      data: {
        // Mocked global config data
        // Add your desired mock response here
      },
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    // Mock the fetch function to return the mock response
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);

    // Call the getGlobalConfig function
    const result = await getGlobalConfig();

    // Assert that the fetch function was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${ROOT_URL}/global-config`, {
      next: { tags: ["global-config"] },
    });

    // Assert that the result matches the expected mock response
    expect(result).toEqual(mockResponse);
  });
});
