import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import AddItem from "../AddItem/AddItem";

export default class extends Component {
  createKey = (amount = 8) => {
    const chars = [
      "A",
      "a",
      "B",
      "b",
      "C",
      "c",
      "D",
      "d",
      "E",
      "e",
      "F",
      "f",
      "G",
      "g",
      "H",
      "h",
      "I",
      "i",
      "J",
      "j",
      "K",
      "k",
      "L",
      "l",
      "M",
      "m",
      "N",
      "n",
      "O",
      "o",
      "P",
      "p",
      "Q",
      "q",
      "R",
      "r",
      "S",
      "s",
      "T",
      "t",
      "U",
      "u",
      "V",
      "v",
      "W",
      "w",
      "X",
      "x",
      "Y",
      "y",
      "Z",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    const len = chars.length;
    let codeArr = [];

    for (let i = 0; i < amount; i++) {
      let index = Math.round(Math.random() * (len - 1));
      codeArr.push(chars[index]);
    }

    return codeArr.join("");
  };

  state = {
    todoData: [
      {
        label: "Drink Coffee",
        important: false,
        done: false,
        id: this.createKey(),
      },
      {
        label: "Build Awesome App",
        important: false,
        done: false,
        id: this.createKey(),
      },
      {
        label: "Go To Rest",
        important: false,
        done: false,
        id: this.createKey(),
      },
    ],
    filter: "all",
    toDo: 0,
    done: 0,
    term: "",
  };

  importantCheck = (id) => {
    let newData = this.state.todoData;

    newData.map((item) => {
      if (item.id === id) {
        item.important = !item.important;
        return item;
      } else return item;
    });

    this.setState({ todoData: newData });
  };

  doneCheck = (id) => {
    let newData = this.state.todoData;

    newData.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    this.setState({ todoData: newData });
    this.setStatistic();
  };

  onDeleted = (id) => {
    let newData = [];

    for (let item of this.state.todoData) {
      if (item.id !== id) newData.push(item);
    }

    this.setState({ todoData: newData });
  };

  addItem = (text) => {
    if (!text.trim()) return false;

    let item = {
      label: text,
      important: false,
      done: false,
      id: this.createKey(),
    };

    let newData = this.state.todoData;

    newData.push(item);

    this.setState({ todoData: newData });
    this.setStatistic();
  };

  passFilter = (value) => {
    this.setState({ filter: value });
  };

  filterTodo = (filter) => {
    const data = this.state.todoData;
    let result = [];

    if (filter === "all") {
      result = data;
    } else if (filter === "active") {
      for (let item of data) {
        if (!item.done) result.push(item);
      }
    } else if (filter === "done") {
      for (let item of data) {
        if (item.done) result.push(item);
      }
    }

    return result;
  };

  setStatistic = () => {
    let done = 0;
    let toDo = 0;
    let data = this.state.todoData;

    for (let item of data) {
      if (item.done) done++;
      else toDo++;
    }
    this.setState({ done: done, toDo: toDo });
  };

  passTerm = (term) => {
    this.setState({ term: term });
  };

  searchTodo = (data, term) => {
    if (term.length === 0) return data;
    let result = [];

    for (let item of data) {
      let label = item.label.toLowerCase();
      let text = term.toLowerCase();

      if (label.indexOf(text) >= 0) {
        result.push(item);
      }
    }
    return result;
  };

  render() {
    const filterActive = this.state.filter;
    const { toDo, done, term } = this.state;

    let newTodoData = this.filterTodo(this.state.filter);
    newTodoData = this.searchTodo(newTodoData, term);

    return (
      <div className="app">
        <Header toDo={toDo} done={done} />

        <SearchPanel
          passFilter={this.passFilter}
          filterActive={filterActive}
          passTerm={this.passTerm}
        />

        <TodoList
          todos={newTodoData}
          importantCheck={this.importantCheck}
          doneCheck={this.doneCheck}
          onDeleted={this.onDeleted}
        />

        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
