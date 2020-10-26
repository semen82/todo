import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {
      important,
      done,
      label,
      importantCheck,
      doneCheck,
      onDeleted,
    } = this.props;

    let styleClass = "label";
    if (important) {
      styleClass += " important";
    }
    if (done) {
      styleClass += " done";
    }

    return (
      <div className="todo-list-item">
        <span className={styleClass} onClick={doneCheck}>
          {label}
        </span>
        <div className="buttons">
          <button type="button" onClick={onDeleted}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <button type="button" onClick={importantCheck}>
            <i className="fa fa-exclamation" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
