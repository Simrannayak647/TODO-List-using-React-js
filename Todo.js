import React, { useState } from 'react';
import './App.css'


const Todo = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  const addTodo = () => {
    if(newTodo === ''){
        alert('Please enter a task');
      return; 
    }
    setTodos([...todos, newTodo]); 
    setNewTodo(''); 
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, id) => id !== index)); 
  };

  return (
    <div>
      <div className='card'>
        <div className='header'>To Do List</div>
      <input className= 'input-group'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Please Enter your task"
      />
      <button className='btn-add' onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
export default Todo