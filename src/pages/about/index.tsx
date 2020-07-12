import React from "react";
import {Row, Col, Typography} from "antd";

const {Title, Paragraph} = Typography;

export const About = () => (
  <>
    <Row className="normal-width margin-bottom" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col>
        <img src="/apple-icon.png" alt="PPEForFree Logo" />
      </Col>
    </Row>
    <Row className="normal-width margin-bottom" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col>
        <Title level={1}>PPEForFree</Title>
        <Title level={2}>The Issue</Title>
        <Paragraph>
          As Covid-19 transforms our society, the sheer magnitude of the pandemic has put
          an extreme strain on many countries' health care systems. As we've come to know,
          most systems were not ready for the high influx of patients infected by Covid-19
          creating unanticipated shortages of medical supplies.
        </Paragraph>
        <Paragraph>
          One of the main shortages, and also the one we heard about the most in the news
          was the shortage of PPE across the world. Personal Protective Equipment is a key
          resource in guaranteeing the safety of healthcare professionals and their
          patients. This equipment is crucial to reducing the loss of human lives to this
          pandemic.
        </Paragraph>
        <Paragraph>
          In response to this issue, maker groups and individuals around the world have
          sprung into action, deciding that they could not sit idly by as hospitals and
          other healthcare institutions' resources were increasingly strained. This
          dynamic has led to the emergence of a strong and innovative grassroots PPE
          manufacturing scene.
        </Paragraph>
        <Paragraph>
          This PPE is of no use if it cannot reach the institutions and individuals that
          need it the most. The need for the establishment of an unconventional supply
          chain has become strikingly apparent. Many organizations and initiatives have
          surfaced around this issue and have been quite successful so far. Organizations
          such as{" "}
          <a href="https://findthemasks.com" target="_blank" rel="noreferrer noopener">
            Find the Masks
          </a>{" "}
          and{" "}
          <a href="https://getusppe.org" target="_blank" rel="noreferrer noopener">
            Get Us PPE
          </a>{" "}
          have established an efficient and organized way to go about PPE matching between
          individuals/organizations that can donate PPE, and institutions that are in need
          of these supplies.
        </Paragraph>
        <Paragraph>
          In order to reach their full potential, websites rely heavily on the knowledge
          they have of potential providers of medical-grade PPE and grassroots
          manufactured PPE. In that regard, they have each tried to gather data through
          the use of forms on their sites, but that can only reach as many people as the
          site does. This significantly limits the amount of data that can be gathered in
          a short time frame, and therefore greatly reduces the potential impact of these
          sites.
        </Paragraph>
        <Title level={2}>Our Goals</Title>
        <Paragraph>
          At PPEForFree we started out with the same objective of PPE matching, and
          specifically in the case of grassroots manufactured PPE. Despite our initial
          objective, we have taken notice that some of the websites we've cited previously
          have gone much deeper into PPE matching and with that in mind we decided to
          transition our focus to the data side of things.
        </Paragraph>
        <Paragraph>
          Our goals at PPEForFree are as follows:
          <ul>
            <li>
              Build the most exhaustive database of grassroots manufactured PPE through
              the aggregation of as many datasets as possible
            </li>
            <li>Provide a well documented API to read our dataset</li>
            <li>
              Collaborate with websites that have developed the adequate front end to make
              good use of this data
            </li>
            <li>
              Build a team of outreach volunteers to manually verify each crowd-sourced
              submission, as well as to reach out to the groups and open lines of
              communication.
            </li>
            <li>
              Build partnerships with groups gathering data providing them with a way of
              contributing data to our dataset
            </li>
          </ul>
        </Paragraph>
        <Title level={2}>Our Plan of Action</Title>
        <Paragraph>
          <ul>
            <li>
              Meticulously identify datasets around the world along with their ease of
              integration into our database
            </li>
            <li>
              Get in touch with the maintainers of those datasets in order to explore
              possible collaboration options to facilitate integration
            </li>
            <li>
              Reach out to potential "users" of our DB to understand their needs and the
              main issues surrounding the use/collection of this data
            </li>
            <li>
              Collaborate closely with these potential "users" to determine the most
              adequate schema
            </li>
            <li>
              Build a simple and easy to use API providing universal access to our data
            </li>
            <li>
              Provide clear and well-constructed documentation for our Schema and API
            </li>
          </ul>
        </Paragraph>
        <Title level={2}>We Need Your Help</Title>
        <Paragraph>
          If you would like to get involved{" "}
          <a href="https://discord.gg/pWF2zBf" target="_blank" rel="noreferrer noopener">
            join us on Discord
          </a>
          .
        </Paragraph>
      </Col>
    </Row>
  </>
);
