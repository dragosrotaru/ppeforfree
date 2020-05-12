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
              <div className="hamburger --align-end">
                <button onClick={expandMenu} className="icon">
                  <img src="/Hamburger_icon.png" alt="expand menu" className="icon-hamburger" />
                </button>
              </div>
              <div id="sidebar" className="sidebar">
                <button onClick={closeMenu} className="icon">
                  <img src="/x_icon.png" alt="close menu" className="icon-hamburger" />
                </button>
                <div className="link-list">
                  <Link to="/" className="link">directory</Link><br />
                  <Link to="/about" className="link">about</Link><br />
                  <Link to="/ideas" className="link">submit an idea</Link><br />
                  <a
                    href="https://discord.gg/pWF2zBf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    join us
                  </a><br />
                  <a
                    href="https://twitter.com/ppeforfree"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon icon-twitter"
                  >
                    <img src="/twitter-icon.png" alt="twitter" className="icon-mobile" />
                  </a><br />
                  <a
                    href="http://github.com/PPEForFree"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icon icon-github"
                  >
                    <img src="/github-icon.png" alt="github" className="icon-mobile" />
                  </a><br />
                </div>
              </div>
              <nav className="nav-links">
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

function expandMenu(){
  const sidebar = document.getElementById("sidebar")
  if(sidebar){
    sidebar.style.width = "250px";
  }
}
function closeMenu(){
  const sidebar = document.getElementById("sidebar")
  if(sidebar){
    sidebar.style.width = "0";
  }
}

export default App;
