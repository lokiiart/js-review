import React, {Component} from "react";
import ReactDOM from "react-dom";
import styles from 'todomvc-app-css/index.css';

import InputComp from './js/InputComp';
import TodoList from './js/TodoList';
import Filter from './js/Filter';

import Store from './js/Store';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      store: new Store()
    }
  }

  newTodoItem(todo){
    console.log("i'm here", todo);
    console.log(this);
    this.setState({store: new Store(this.state.store.add(todo))});
  }

  reRender(){
    console.log("I'm going to reRender");
  }

  render(){
    // const store = this.store;
    const {store} = this.state;
    console.log('Did I rerender again?');
    return (
      <section className="todoapp">
        <InputComp store={store} newItem={this.newTodoItem.bind(this)}  />
        <TodoList store={store}  />
        <Filter />
      </section>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);