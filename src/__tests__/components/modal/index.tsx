import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {DetailModal} from "src/components/modal";

const TestModal = () => (
  <DetailModal
    id={1}
    name="Group name"
    description="Group description"
    locations={["Group location"]}
    isPublic={true}
    foundedOn="2020-03-23T04:00:00.000Z"
    memberCount={1234}
    memberCountIncreaseWeekly={12}
    postCountIncreaseDaily={34}
    postCountIncreaseMonthly={56}
  />
);

describe("Collapsed DetailModal", () => {
  it("displays eye icon", () => {
    const {getByTestId} = render(<TestModal />);
    const element = getByTestId("eye-icon");
    expect(element).toBeInTheDocument();
  });
});

describe("Expanded DetailModal", () => {
  it("displays name", () => {
    const {getByTestId, getByText} = render(<TestModal />);
    const eyeIcon = getByTestId("eye-icon");

    fireEvent.click(eyeIcon, "click");

    const element = getByText("Group name");
    expect(element).toBeInTheDocument();
  });

  it("displays description", () => {
    const {getByTestId, getByText} = render(<TestModal />);
    const eyeIcon = getByTestId("eye-icon");

    fireEvent.click(eyeIcon, "click");

    const element = getByText("Group description");
    expect(element).toBeInTheDocument();
  });

  it("displays location", () => {
    const {getByTestId, getByText} = render(<TestModal />);
    const eyeIcon = getByTestId("eye-icon");

    fireEvent.click(eyeIcon, "click");

    const element = getByText("Group location");
    expect(element).toBeInTheDocument();
  });
});
