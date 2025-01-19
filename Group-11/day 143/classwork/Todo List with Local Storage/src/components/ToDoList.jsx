import { useEffect, useState } from 'react';

const ToDoList = () => {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log("LocalStorage is changed");
    }, [taskList])

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        e.target.reset();

        setTaskList([...taskList, task]);
    }

    const handleDelete = (index) => {
        const newTaskList = taskList.filter((_, i) => index !== i);
        setTaskList(newTaskList);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Enter new task" required />
                <button>Submit</button>
            </form>
            <ul>
                {
                    taskList.map((curValue, index) => {
                        return <li key={`task-${index}`} onClick={() => handleDelete(index)}>{curValue}</li>;
                    })
                }
            </ul>
        </>
    );
}

export default ToDoList;
