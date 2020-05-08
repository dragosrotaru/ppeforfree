import React from "react";
import {Row, Col, Typography} from "antd";

const {Title, Paragraph} = Typography;

export const About = () => (
  <>
    <Row className="normal-width" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col>
        <img src="/apple-icon.png" alt="PPEForFree Logo" />
      </Col>
    </Row>
    <Row className="normal-width" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col>
        <Title level={1}>PPEForFree</Title>
        <Paragraph>
          PPEForFree is a sense-making movement by the people and for the people. We
          combine Open Source Intelligence (OSINT) and Data Science capabilities with the
          ethos and community of Wikipedia to help light a path for the millions of
          restless minds searching for the means to fight the PPE shortage.
        </Paragraph>
        <Paragraph>
          Today we live in an age defined by an unprecedented amount of digital
          information. Sadly, our information ecology, the internet, is polluted with
          misinformation, low quality data, fake news, spam and a whole suite of other
          related issues.
        </Paragraph>
        <Paragraph>
          Not only that, but we have a fragmented community spread out over thousands of
          messaging boards, facebook groups, private messaging channels and so forth. Some
          important innovation that happens in one corner of the web doesn’t necessarily
          reach everywhere else. So we have thousands of people reinventing the wheel.
        </Paragraph>
        <Title level={2}>Strategy</Title>
        <Paragraph>
          Our first goal is to dramatically scale and boost the efficiency of the
          decentralized Personal Protective Equipment (PPE) supply chains that have sprung
          up. Right now, there are regular people all over the world making PPE in their
          community through what we call the Grassroots PPE Supply Chain. We want to turn
          it up all the way to 11. We are going to amplify the signal, reduce the noise by
          attempting to fix the information ecology of the PPE supply chain using a fresh
          new approach.
        </Paragraph>
        <Title level={2}>Plan of action</Title>
        <Paragraph>
          <ul>
            <li>
              Grab the public data from PPE Facebook groups automatically and display that
              data in a table.
            </li>
            <li>
              Make the site as user friendly and useful as possible with insightful
              visualisations of data and search / filter / sort / export functionality for
              easy discovery.
            </li>
            <li>
              Crowd-source discovery of new groups by allowing users to submit links on
              the website.
            </li>
            <li>
              Build a team of outreach volunteers to manually verify each crowd-sourced
              submission, as well as to reach out to the groups and open lines of
              communication.
            </li>
            <li>
              Provide an open API and a kickass open-source community so potential
              competitors work with us instead.
            </li>
            <li>
              Convince as many leaders as possible to include a link to this website
              somewhere where it is visible to every single person in their organisation.
            </li>
            <li>
              Aggregate all the information, particularly links, shared acoss all facebook
              groups, vetted by subject matter expert volunteers, and display them here.
            </li>
            <li>Share this website agressively on social media.</li>
            <li>Make this site accessible in as many languages as possible.</li>
            <li>
              Create a comprehensive gold standard repository of PPE designs,
              methodologies, processes, tools, etc.
            </li>
            <li>
              Provide a legal framework with free waivers for every juristiction to allow
              those donating homemade PPE to do so knowing they are staying within the
              law.
            </li>
          </ul>
        </Paragraph>
        <Title level={2}>We need your help</Title>
        <Paragraph>
          Please share this website on social media using the hashtag{" "}
          <strong>#ppeforfree</strong>. If you would like to get involved{" "}
          <a href="https://discord.gg/pWF2zBf" target="_blank" rel="noreferrer noopener">
            join us on Discord
          </a>
          .
        </Paragraph>
      </Col>
    </Row>
  </>
);
