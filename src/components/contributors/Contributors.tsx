import React from "react";
import _ from "lodash";
import {Row, Col, Avatar} from "antd";

export type PersonData = {
  name: string;
  location?: string;
  url?: string;
  avatarUrl?: string;
  roles: string[];
};

export type OrganisationData = {
  name: string;
  url: string;
  avatarUrl: string;
};

type ContributorsPeopleProps = {
  people: PersonData[];
};

type ContributorsOrganisationProps = {
  organisations: OrganisationData[];
};

type PersonProps = {
  data: PersonData;
};

type OrganisationProps = {
  data: OrganisationData;
};

const Person = ({data}: PersonProps) => (
  <Col xs={24} sm={8} className="text-align-center margin-bottom contributor">
    <div>
      {data.avatarUrl ? (
        <Avatar src={data.avatarUrl} size={64} />
      ) : (
        <Avatar size={64}>{data.name.charAt(0)}</Avatar>
      )}
    </div>
    <div>
      {data.url ? (
        <a href={data.url} target="_blank">
          {data.name}
        </a>
      ) : (
        <>{data.name}</>
      )}
    </div>
    <div>
      {data.location ? `${data.location} - ` : ""}
      {data.roles.join(", ")}
    </div>
  </Col>
);

const Organisation = ({data}: OrganisationProps) => (
  <Col xs={24} sm={8} className="text-align-center margin-bottom contributor">
    <div>
      <Avatar src={data.avatarUrl} size={64} />
    </div>
    <div>
      <a href={data.url} target="_blank">
        {data.name}
      </a>
    </div>
  </Col>
);

const PeopleRow = ({people}: ContributorsPeopleProps) => (
  <Row
    className="normal-width"
    justify="center"
    gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
    align="top"
  >
    {people.map((person) => (
      <Person data={person} />
    ))}
  </Row>
);

export const ContributorsPeople = ({people}: ContributorsPeopleProps) => {
  const groupedPeople = _.chunk(people, 5);

  return (
    <>
      {groupedPeople.map((group) => {
        const first = group.slice(0, 2);
        const second = group.slice(2, 6);
        return (
          <>
            <PeopleRow people={first} />
            {second ? <PeopleRow people={second} /> : ""}
          </>
        );
      })}
    </>
  );
};

export const ContributorsOrganisations = ({
  organisations,
}: ContributorsOrganisationProps) => {
  return (
    <>
      {organisations.map((organisation) => (
        <Organisation data={organisation} />
      ))}
    </>
  );
};
