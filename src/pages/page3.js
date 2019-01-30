import React from "react";
import Highlight from "react-highlight";

export default () => {
  return (
    <>
      <h1>React.lazy</h1>
      <p>Special Wrapper for `import()`</p>
      <Highlight className="javascript">
        {`const MyComponent = React.lazy(() => import('./myComponent.js'))`}
      </Highlight>
      <p />
    </>
  );
};
