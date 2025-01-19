import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");  
  const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    setTodoList(() => [...todoList, task]);
    setInputValue("")
  }

  return (
    <main>
      <section>
        <h1>To Do List</h1>
        <input 
          type='text'
          placeholder='Enter a task'
          onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => addTask(inputValue)}>Add Task</button>
      </section>
      <section>
        <ul>{todoList.map((curValue, index) => <li key={`task-${index}`}>{curValue}</li>)}</ul>
      </section>
    </main>
  );
}

export default App
