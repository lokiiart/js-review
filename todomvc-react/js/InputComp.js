import React, { Component } from 'react';
import {TodoItem} from './Model';

const ENTER_KEY = 13;

class InputComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            newTodo : ''
        };
    }

    _newTodoChange(event){
        this.setState({newTodo: event.target.value});
    }

    // _newTodoChange = (event) => {
    //     this.setState({newTodo: event.target.value});
    // }

    _newTodoKeyDown(event){
    // _newTodoKeyDown = (event) => {
        if(event.keyCode !== ENTER_KEY){
            return;
        }

        event.preventDefault();

        let val = this.state.newTodo.trim();

        if(val){
            let item = new TodoItem(val);
            this.setState({newTodo: ''})
            this.props.newItem(item);
        }
    }

  render() {
    return (
        <header className="header">
				<h1>todos</h1>
                <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus={true}
                value={this.state.newTodo}
                onKeyDown={this._newTodoKeyDown.bind(this)}
                onChange={this._newTodoChange.bind(this)}
                />
        </header>
    );
  }
}

export default InputComp;
