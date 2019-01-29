import React from "react";
import Highlight from "react-highlight";

export default () => (
  <>
    <h1>{`Error Boundary`}</h1>
    <p>Error handler</p>
    <Highlight className="javascript">
      {`const ErrorBoundedComp = () => (
  <ErrorBoundary>
    <SuspendedComp />
  </ErrorBoundary
)`}
    </Highlight>
    <p>Put it somewhere in the component tree</p>
  </>
);
