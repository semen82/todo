import React, { Component } from "react";
import "./AddItem.css";

export default class AddItem extends Component {
  state = {
    value: "",
  };

  chancheInput = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { addItem } = this.props;

    const submitForm = (event) => {
      event.preventDefault();
      addItem(this.state.value);
      this.setState({ value: "" });
    };

    return (
      <form className="add-item" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Add item ..."
          onChange={this.chancheInput}
          value={this.state.value}
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}
