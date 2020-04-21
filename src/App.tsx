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
                <Link to="/">about</Link>
                <Link to="/directory">directory</Link>
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
          <Route path="/directory" component={Directory} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
