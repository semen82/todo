import React, { Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  state = {
    buttons: [
      { label: "all", btnClass: "active", id: 100 },
      { label: "active", btnClass: "", id: 101 },
      { label: "done", btnClass: "", id: 102 },
    ],
  };

  render() {
    const { passFilter, filterActive } = this.props;
    const buttons = this.state.buttons;

    const setStateFilter = () => {
      buttons.map((item) => {
        if (item.label === filterActive) {
          item.btnClass = "active";
        } else item.btnClass = "";

        return item;
      });
    };
    setStateFilter();
    return (
      <div className="filter">
        {buttons.map((item) => {
          return (
            <button
              key={item.id}
              className={item.btnClass}
              onClick={() => passFilter(item.label)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }
}
