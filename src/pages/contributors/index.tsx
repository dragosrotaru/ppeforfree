import React from "react";
import {Row, Col, Typography} from "antd";
import organisations from "./organisations.json";
import people from "./people.json";
import {
  ContributorsOrganisations,
  ContributorsPeople,
} from "src/components/contributors/Contributors";

const {Title, Paragraph} = Typography;

export const Contributors = () => (
  <>
    <Row className="normal-width margin-bottom" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col>
        <Title level={1}>Contributors</Title>
        <Paragraph>
          PPEForFree is built and maintained by a community of volunteers. Below is a list
          of people who have donated their time and expertise to the project and
          organisations who have donated resources.
        </Paragraph>
      </Col>
    </Row>
    <Row
      className="normal-width margin-bottom text-align-center"
      gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
    >
      <Col>
        <Title level={2}>People</Title>
        <ContributorsPeople people={people} />
      </Col>
    </Row>
    <Row
      className="normal-width margin-bottom text-align-center"
      gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
    >
      <Col>
        <Title level={2}>Organisations</Title>
        <ContributorsOrganisations organisations={organisations} />
      </Col>
    </Row>
  </>
);
