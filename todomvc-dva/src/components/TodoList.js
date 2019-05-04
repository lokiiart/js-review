import React from 'react'
import {connect} from 'dva'

const TodoList = ({todos}) => {
    console.log(todos);
  return (
    <ul className="todo-list">
    {todos.list.map((item, index)=>(
        <li key={index}>
            <div className="view">
                <input type="checkbox" className="toggle" />
                <label htmlFor="">{item.title}</label>
                <button className="destroy"></button>
            </div>
        </li>
    ))}
    </ul>
      
  )
}

export default connect(({todos})=>({todos}))(TodoList);
