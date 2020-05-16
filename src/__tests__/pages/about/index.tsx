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
    "PPEForFree is a sense-making movement by the people and for the people",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});

test("renders strategy", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "Our first goal is to dramatically scale and boost the efficiency of the decentralized Personal Protective Equipment (PPE) supply chains that have sprung up",
    {exact: false}
  );
  expect(element).toBeInTheDocument();
});

test("renders plan of action", () => {
  const {getByText} = render(<About />);
  const element = getByText(
    "Grab the public data from PPE Facebook groups automatically and display that data in a table.",
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
