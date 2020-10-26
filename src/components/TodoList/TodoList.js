import React, { Component } from 'react';
import './TodoList.css';

import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends Component {
  render() {

    const {todos, importantCheck, doneCheck, onDeleted} = this.props;

    return (
      <div className="todo-list">
        {
          todos.map((item) => {
            return (
              <li key={item.id}>
                <TodoListItem
                label={item.label}
                important={item.important}
                done={item.done}
                importantCheck={() => importantCheck(item.id)}
                doneCheck={() => doneCheck(item.id)}
                onDeleted={() => onDeleted(item.id)}
                />
              </li>
            )
          })
        }
      </div>
    );
  };
};