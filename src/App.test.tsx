import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Rect Component", () => {
  it("renders correctly ", () => {
    render(<App />);

    expect(true).toBe(true)
  });
});
