import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Movies from "./test-view";

describe("test code", () => {
  it("3 + 5 should be 8", () => {
    expect(3 + 5).toBe(8);
  });
  it("should render the the list of movies", () => {
    /**... */
    const { getByRole } = render(<Movies title="movie title" />);
    expect(getByRole("movies-list").textContent).toBe("movie title");
  });
});
