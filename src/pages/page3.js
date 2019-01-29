import React from "react";
import Highlight from "react-highlight";
const Comp = () => <div>hi</div>;

export default () => {
  import("./testComp.js").then(res => console.log("Import:", res));
  console.log("lazy", React.lazy(() => import("./testComp.js")));
  console.log("inline", <Comp />);
  return (
    <>
      <h1>React.lazy</h1>
      <p>Special Wrapper for `import()`</p>
      <Highlight className="javascript">
        {`const MyComponent = React.lazy(() => import('./myComponent.js'))`}
      </Highlight>
      <p>
        <small>{`(Look at the console)`}</small>
      </p>
    </>
  );
};
