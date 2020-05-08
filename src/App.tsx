import React from "react";
import "./App.css";

// Router
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Header
import "@rmwc/top-app-bar/styles";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from "@rmwc/top-app-bar";

import {Layout} from "antd";

// Pages
import {About} from "./pages/about";
import {Ideas} from "./pages/ideas";
import {InitiativeDirectory} from "./pages/initiatives";
import {InitiativeSubmission} from "./pages/initiative-submission";

const {Content} = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>#ppeforfree</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <nav>
                <Link to="/directory">directory</Link>
                <Link to="/">about</Link>
                <Link to="/ideas">submit an idea</Link>
                <a
                  href="https://discord.gg/pWF2zBf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  join us
                </a>
                <a
                  href="https://twitter.com/ppeforfree"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="icon icon-twitter"
                >
                  <img src="/twitter-icon.png" alt="twitter" />
                </a>
                <a
                  href="http://github.com/PPEForFree"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="icon icon-github"
                >
                  <img src="/github-icon.png" alt="github" />
                </a>
              </nav>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />

        <Content>
          <Switch>
            <Route path="/ideas" component={Ideas} />
            <Route path="/initiatives/submit" component={InitiativeSubmission} />
            <Route path="/directory" component={InitiativeDirectory} />
            <Route path="/" component={About} />
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
