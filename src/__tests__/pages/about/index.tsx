import React from "react";
import {render} from "@testing-library/react";
import {About} from "src/pages/about";

test("renders logo", () => {
  const {getByAltText} = render(<About />);
  const element = getByAltText("PPEForFree Logo");
  expect(element).toBeInTheDocument();
});

test("renders manifesto", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "As Covid-19 transforms our society, the sheer magnitude of the pandemic has put",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});

test("renders strategy", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "At PPEForFree we started out with the same objective of PPE matching",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});

test("renders plan of action", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "Build the most exhaustive database of grassroots manufactured PPE",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});

test("renders call to action", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "Please share this website on social media using the hashtag",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});
