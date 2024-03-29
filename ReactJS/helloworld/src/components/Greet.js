import React from "react";

const Greet = (props) => (
  <div>
    <h1>Hello {props.name}!</h1> {props.children}
  </div>
);

export default Greet;
