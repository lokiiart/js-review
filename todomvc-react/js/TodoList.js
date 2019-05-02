import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
      const store = this.props.store.find();
      console.log("I'm store in todolist", store); //why the render this before InputComp??
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

export default TodoList;
