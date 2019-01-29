import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Spinner from "react-spinkit";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";
import "highlight.js/styles/monokai.css";

const pages = Array(9)
  .fill(0)
  .map((_, i) => lazy(() => import(`./pages/page${i + 1}.js`)));

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({ className: isCurrent ? "active" : "" })}
  />
);

function App() {
  const Page1 = pages[0];
  return (
    <div className="container">
      <div className="nav">
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/page2">import()</NavLink>
        <NavLink to="/page3">React.lazy</NavLink>
        <NavLink to="/page4">{`<Suspense>`}</NavLink>
        <NavLink to="/page5">Error Boundary</NavLink>
        <NavLink to="/page6" onMouseEnter={() => import(`./pages/page6.js`)}>
          All Together
        </NavLink>
        <NavLink to="/page7">Comparison</NavLink>
        <NavLink to="/page8">Considerations</NavLink>
        <NavLink to="/page9">Thanks</NavLink>
      </div>
      <div className="page">
        <ErrorBoundary>
          <Suspense
            fallback={
              <Spinner
                name="folding-cube"
                color="purple"
                fadeIn="none"
                className="big-spinner"
              />
            }
          >
            <Router>
              <Page1 path="/" />
              {pages.map((Page, i) => (
                <Page key={`page-${i}`} path={`/page${i + 1}`} />
              ))}
            </Router>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
