import React from 'react';
import styles from 'todomvc-app-css/index.css';
import AddInput from '../components/AddInput';
import TodoList from '../components/TodoList';
import Filters from '../components/Filters';

function IndexPage() {
  return (
        <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <AddInput />
                </header>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <TodoList />
                </section>
                <footer className="footer">
                    <span className="todo-count"></span>
                    <Filters />
                    <button className="clear-completed">Clear completed</button>
                </footer>
            </section>

  );
}

IndexPage.propTypes = {
};

// export default connect(({todos})=>({todos}))(IndexPage);
export default IndexPage;
