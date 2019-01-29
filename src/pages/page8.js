import React from "react";

export default () => (
  <>
    <h1>Other Considerations</h1>
    <ul>
      <li>Route-based code splitting with React Router or Reach Router</li>
      <li>
        Dynamic Preload with <code>onMouseEnter</code>
      </li>
      <li>Nested {`<Suspense>`} and Error boundaries</li>
      <li>
        Imported modules <strong>must</strong> be default exports
      </li>
    </ul>
  </>
);
