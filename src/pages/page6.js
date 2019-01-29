import React from "react";
import Highlight from "react-highlight";

export default () => (
  <>
    <h1>All Together</h1>
    <Highlight className="javascript">
      {`const MyComponent = React.lazy(() => import('./myComponent.js'))

const SuspendedComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <MyComponent /> {/* Only loaded when rendered.*/}
    </Suspense>
  </ErrorBoundary
)`}
    </Highlight>
  </>
);
