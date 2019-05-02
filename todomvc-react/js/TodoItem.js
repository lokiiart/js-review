import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
        <li>
            <div className="view">
                <input type="checkbox" className="toggle" />
                <label htmlFor="">test</label>
                <button className="destroy"></button>
            </div>
        </li>
        );
  }
}

export default TodoItem;
