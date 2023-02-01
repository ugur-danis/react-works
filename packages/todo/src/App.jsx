import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: 'Learn JavaScript',
      completed: true,
    },
    {
      id: 1,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Redux',
      completed: false,
    },
  ]);
  const [filterKey, setFilterKey] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    let updatedFilteredTodos;

    switch (filterKey) {
      default:
      case 'all':
        updatedFilteredTodos = todos;
        break;
      case 'active':
        updatedFilteredTodos = todos.filter((t) => !t.completed);
        break;
      case 'completed':
        updatedFilteredTodos = todos.filter((t) => t.completed);
        break;
    }

    setFilteredTodos(updatedFilteredTodos);
  }, [filterKey, todos]);

  return (
    <>
      <section className="todoapp">
        <Header setTodos={setTodos} />
        <Main
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
        <Footer
          filterKey={filterKey}
          setFilterKey={setFilterKey}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        />
      </section>
    </>
  );
}

const Header = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        id: todos.at(-1).id + 1,
        title: newTodo,
        completed: false,
      },
    ]);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

const Main = ({ todos, setTodos, filteredTodos }) => {
  const handleCompletedChange = (e, todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = e.target.checked;
      }

      return t;
    });

    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (e, todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                defaultChecked={todo.completed}
                type="checkbox"
                onChange={(e) => handleCompletedChange(e, todo)}
              />
              <label>{todo.title}</label>
              <button
                className="destroy"
                onClick={(e) => handleRemoveTodo(e, todo)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = ({ filterKey, setFilterKey, filteredTodos, setTodos }) => {
  const filters = ['all', 'active', 'completed'];

  const handleSelectFilter = (key) => {
    setFilterKey(key);
  };

  const handleClearCompleted = (e) => {
    setTodos((todos) => todos.filter((t) => !t.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredTodos.length}</strong>
        {' items left'}
      </span>

      <ul className="filters">
        {filters.map((f) => (
          <li key={f}>
            <a
              onClick={() => handleSelectFilter(f)}
              className={f === filterKey ? 'selected' : ''}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="clear-completed"
        onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default App;
