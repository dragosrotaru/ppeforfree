import React from "react";
import "./App.css";

// Router
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Header
import "@rmwc/top-app-bar/styles";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from "@rmwc/top-app-bar";

// Pages
import { About } from "./pages/about";
import { Ideas } from "./pages/ideas";
import { InitiativeDirectory } from "./pages/initiatives";
import { InitiativeSubmission } from "./pages/initiative-submission";

function App() {
  return (
    <div>
      <Router>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>#ppeforfree</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <nav>

                <Link to="/">directory</Link>
                <Link to="/about">about</Link>
                <Link to="/ideas">submit an idea</Link>
                <a
                  href="https://discord.gg/pWF2zBf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  join us
                </a>
                <a
                  href="http://github.com/DragosRotaru/ppeforfree"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  github
                </a>
              </nav>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />

        <Switch>
          <Route path="/ideas" component={Ideas} />
          <Route path="/initiatives/submit" component={InitiativeSubmission} />
          <Route path="/about" component={About} />
          <Route path="/" component={InitiativeDirectory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
