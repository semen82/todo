import React, { Component } from "react";
import "./SearchPanel.css";

import Filter from "../Filter/Filter";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  render() {
    const { passFilter, filterActive, passTerm } = this.props;

    const setTerm = (event) => {
      let value = event.target.value;
      this.setState({ term: value });
      passTerm(value);
    };

    return (
      <div className="search-panel">
        <input
          type="text"
          placeholder="search to do ..."
          className="search"
          onChange={setTerm}
          value={this.state.term}
        />

        <Filter passFilter={passFilter} filterActive={filterActive} />
      </div>
    );
  }
}
