import React, { Component } from 'react';
import {TodoItem} from './Model';

import {TodosContext} from './context';

const ENTER_KEY = 13;

class InputComp extends Component {

  render() {
    return (
        <TodosContext.Consumer>
            {({todos, addItem})=>(
                <header className="header">
                        <h1>todos</h1>
                        <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                        onKeyDown={addItem}
                        />
                </header>
            )}
        </TodosContext.Consumer>
    );
  }
}


export default InputComp;
