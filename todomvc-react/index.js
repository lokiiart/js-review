import React from "react";
import ReactDOM from "react-dom";
import styles from 'todomvc-app-css/index.css';

import InputComp from './js/InputComp';
import TodoList from './js/TodoList';
import Filter from './js/Filter';


function App() {
  return (
    <section className="todoapp">
      <InputComp />
      <TodoList />
      <Filter />
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);