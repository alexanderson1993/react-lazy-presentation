import React from "react";
import Highlight from "react-highlight";

export default () => (
  <>
    <h1>{`<Suspense>`}</h1>
    <p>Loading fallback handler</p>
    <Highlight className="javascript">
      {`const SuspendedComp = () => (
  <Suspense fallback={<Loading />}>
    <MyComponent />
  </Suspense>
)`}
    </Highlight>
    <p>Put it somewhere in the component tree</p>
  </>
);
