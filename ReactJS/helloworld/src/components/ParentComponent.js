import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert("Hello " + this.state.parentName + " from " + childName);
  }

  render() {
    return <div><ChildComponent parentHandler={this.greetParent}></ChildComponent></div>;
  }
}

export default ParentComponent;

