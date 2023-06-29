import '@testing-library/jest-dom/extend-expect';
import { TextDecoder, TextEncoder } from 'node:util';

Object.assign(global, { TextDecoder, TextEncoder });
