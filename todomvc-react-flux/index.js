import React, {Component} from "react";
import ReactDOM from "react-dom";
import styles from 'todomvc-app-css/index.css';

import InputComp from './js/InputComp';
import TodoList from './js/TodoList';
import Filter from './js/Filter';

import {TodoItem} from './js/Model';



class App extends Component {


  render(){
    return (
      <section className="todoapp">
        <InputComp />
        <TodoList />
        <Filter />
      </section>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);