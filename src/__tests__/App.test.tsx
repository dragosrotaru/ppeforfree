import React from "react";
import {render} from "@testing-library/react";
import App from "../App";

test("renders about page by default", () => {
  const {getByText} = render(<App />);
  const titleElement = getByText(
    "PPEForFree is a sense-making movement by the people and for the people",
    {exact: false}
  );
  expect(titleElement).toBeInTheDocument();
});

test("renders join us alert", () => {
  const {getByText} = render(<App />);
  const titleElement = getByText(
    "We're building a distributed team and are looking for volunteers",
    {exact: false}
  );
  expect(titleElement).toBeInTheDocument();
});
