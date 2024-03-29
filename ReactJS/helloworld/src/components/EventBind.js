import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler(){
    this.setState({
        message:"Goodbye"
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
