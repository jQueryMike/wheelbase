import exp from "constants";
import { getNavUrl } from "./getNavUrl";

describe("getNavUrl", () => {
  it("should return the navigation URL", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: "df513c90-5060-4ea0-aef3-b9531f323a71",
          name: "Home",
          url: "/",
          level: 0,
          children: [],
        },
      ]),
    });

    const result = await getNavUrl();
    expect(result).toBeTruthy();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Home");
  });
});
