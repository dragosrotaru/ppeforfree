import React from "react";
import {render} from "@testing-library/react";
import App from "../App";

test("renders about page by default", () => {
  const {getByText} = render(<App />);
  const titleElement = getByText(
    "As Covid-19 transforms our society, the sheer magnitude of the pandemic has put",
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
