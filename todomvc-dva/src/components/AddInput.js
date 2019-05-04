import React from 'react'
import { connect } from 'dva';

const AddInput = ({dispatch}) => {
    function _newItemAdd(event){

        if(event.keyCode!==13){
            return;
        }
        event.preventDefault();

        let val = event.target.value.trim();

        if(val){
            dispatch({ type: 'todos/fetchLocal', payload: val });
        }

        event.target.value="";

    }

  return (
      <div>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={_newItemAdd} />
      </div>
  )
}

export default connect(({todos})=>({todos}))(AddInput)
