import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    const { toDo, done } = this.props;

    return (
      <div className="header">
        <h1>Todo List</h1>
        <h2>
          {toDo} to do, {done} done
        </h2>
      </div>
    );
  }
}
