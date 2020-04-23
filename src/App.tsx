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
import { Directory } from "./pages/directory";
import { Graph } from "./pages/graph";

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
                <Link to="/graph">graph</Link>
                <Link to="/about">about</Link>
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
          <Route path="/about" component={About} />
          <Route path="/graph" component={Graph} />
          <Route path="/" component={Directory} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
