import { useState } from 'react';
import './App.css'

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value
    e.target.reset();
    setTaskList(() => [...taskList, task]);
  }

  const handleClick = (e) => {
    const newTaskList = taskList.filter(curValue => curValue !== e.target.previousSibling.textContent);
    setTaskList(() => [...newTaskList]);
  }
  return (
    <main>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter new task" required />
        <button>Add Task</button>
      </form>
      <div id="tasks">
        {
          taskList.map((curValue, index) => {
            return (
              <div key={`task-${index}`} className="task">
                <p>{curValue}</p>
                <button onClick={handleClick} className="task-btn">Remove</button>
              </div>
            );
          })
        }
      </div>
    </main>
  );
}

export default App;
