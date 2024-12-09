import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDelete = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleAdd}>Increment</button>
        <button onClick={this.handleDelete}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
