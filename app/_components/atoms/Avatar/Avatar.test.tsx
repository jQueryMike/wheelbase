import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { act } from "react-dom/test-utils";

const testAvatar = {
  src: "https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE",
  alt: "User Avatar",
  width: 64,
  height: 64,
  styling: {},
};

const cases: [string, AvatarProps, () => void][] = [
  [
    "render Avatar with image",
    {
      ...testAvatar,
    },
    async () => {
      const avatarElement = await screen.findByTestId("avatar-image");
      expect(avatarElement).toHaveAttribute("alt", testAvatar.alt);
      expect(avatarElement).toHaveAttribute("width", `${testAvatar.width}`);
      expect(avatarElement).toHaveAttribute("height", `${testAvatar.height}`);
      expect(avatarElement).toHaveAttribute(
        "src",
        expect.stringContaining(
          "/_next/image?url=https%3A%2F%2Ffastly.picsum.photos%2Fid%2F851%2F200%2F300.jpg"
        )
      );
    },
  ],
  [
    "render Avatar with default image values",
    {
      src: testAvatar.src,
      alt: testAvatar.alt,
      styling: {},
    },
    async () => {
      const avatarElement = await screen.findByTestId("avatar-image");
      expect(avatarElement).toHaveAttribute("alt", testAvatar.alt);
      expect(avatarElement).toHaveAttribute("width", "128");
      expect(avatarElement).toHaveAttribute("height", "128");
      expect(avatarElement).toHaveAttribute("loading", "lazy");
      expect(avatarElement).toHaveAttribute(
        "src",
        expect.stringContaining(
          "/_next/image?url=https%3A%2F%2Ffastly.picsum.photos%2Fid%2F851%2F200%2F300.jpg"
        )
      );
    },
  ],
];

describe("Avatar test suite", () => {
  it.each(cases)("%s", async (_, properties, assertions) => {
    render(<Avatar {...properties} />);
    await assertions();
  });

  it("should have no accessibility violations", async () => {
    await act(async () => {
      const { container } = render(<Avatar {...testAvatar} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
