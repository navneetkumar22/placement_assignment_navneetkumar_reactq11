import { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo !== '') {
      const todo = {
        id: Date.now(),
        title: newTodo
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1 className='heading'>Todo  App</h1>

      <div className='new-todo'>
        <input type='text' placeholder='Enter new todo' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button className='add' onClick={addTodo}>Add Todo</button>
      </div>

      <hr />
      <h2>All Todos</h2>

      <div className='todos'>
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
            <p>{todo.title}</p>
            <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
