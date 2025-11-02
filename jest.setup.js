import "@testing-library/jest-dom";

// Fix TextEncoder/TextDecoder in Jest (Node 18+)
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
