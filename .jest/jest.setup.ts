import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import { TextDecoder, TextEncoder } from "node:util";

expect.extend(toHaveNoViolations);

Object.assign(global, { TextDecoder, TextEncoder });

process.env.ENVIRONMENT_NAME = "local";
process.env.API_ROOT_NODE_GUID = "6355e32a-6b6e-4d04-bd8e-342a93403480";
process.env.API_ROOT_NODE_PATH = "test-site";
process.env.API_URL = "http://localhost:30590";
process.env.MEDIA_URL = "http://localhost:30590";
