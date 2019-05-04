import React, { Component } from 'react';
import TodoItem from './TodoItem';

import {todos, TodosContext} from './context';

class TodoList extends Component {
  constructor(props){
    super(props);

    this.addItem = ()=>{
      console.log("I'm here, context");
    }

    this.state = {
      todos: todos,
      addItem: this.addItem
    }

  }

  render() {
    let store = this.context.todos;
    console.log(this.context);
    console.log("we are in todoList", store);
    return (
        <section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                {store.map((todo, index)=>{
                    return <TodoItem key={index} item={todo} />
                })}
                </ul>
        </section>
    );
  }
}

TodoList.contextType = TodosContext;

export default TodoList;
