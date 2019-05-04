import React, { Component } from 'react';

import AddActions from './actions/AddActions';


const ENTER_KEY = 13;

class InputComp extends Component {

  _addItem(event){
        if(event.keyCode !== ENTER_KEY){
            return;
        }
        event.preventDefault();

        //Flux
        AddActions.addActionItem('new test item');


        let val = event.target.value.trim();
  }

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
                        onKeyDown={this._addItem.bind(this)}
                        />
                </header>
            )}
        </TodosContext.Consumer>
    );
  }
}


export default InputComp;
