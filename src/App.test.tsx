import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/#ppeforfree/i);
  expect(titleElement).toBeInTheDocument();
});
