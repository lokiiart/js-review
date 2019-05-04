import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
      const todo = this.props.item;
    return (
        <li className={todo.completed?'completed':''}>
            <div className="view">
                <input type="checkbox" className="toggle" defaultChecked={todo.completed?true:false} />
                <label htmlFor="">{todo.title}</label>
                <button className="destroy"></button>
            </div>
        </li>
        );
  }
}

export default TodoItem;
