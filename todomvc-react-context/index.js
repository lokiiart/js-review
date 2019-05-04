import React, {Component} from "react";
import ReactDOM from "react-dom";
import styles from 'todomvc-app-css/index.css';

import InputComp from './js/InputComp';
import TodoList from './js/TodoList';
import Filter from './js/Filter';

import {TodoItem} from './js/Model';

import {todos, TodosContext} from './js/context';

import Store from './js/Store';


class App extends Component {
  constructor(props){
    super(props);

    this.addItem = (event)=>{
        if(event.keyCode !== 13){
            return;
        }
        event.preventDefault();

        let val = event.target.value.trim();

        let newTodo = {
          title: val,
          completed: false
        };
        todos.push(newTodo);
        this.setState({todos});

        event.target.value='';
    }

    this.state = {
      todos: todos,
      addItem: this.addItem
    }
  }


  render(){
    console.log('index has reRenderd');
    return (
      <section className="todoapp">
      <TodosContext.Provider value={this.state}>
        <InputComp />
        <TodoList />
        <Filter />
        </TodosContext.Provider>
      </section>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);