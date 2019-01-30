import React from "react";

export default () => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <img
        style={{ width: "50%" }}
        src={require("../images/before.png")}
        alt="before"
      />
      <img
        style={{ width: "50%" }}
        src={require("../images/after.png")}
        alt="after"
      />
    </div>
  </>
);
