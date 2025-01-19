import { useState } from 'react';

const StudentGradeTracker = () => {
    const [studentsList, setStudentsList] = useState([]);
    const [avarage, setAvarage] = useState(0);
    const id = studentsList.length + 1;

    const sortByGrades = (arr) => arr.sort((a, b) => a.grade - b.grade).reverse();
    const calculateAvarage = (arr) => Math.round(arr.reduce((acc, curValue) => acc + curValue.grade, 0) / arr.length);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const grade = Number(e.target.grade.value);
        e.target.reset();

        const newStudentsList = [...studentsList, {id: `#${id}`, name, grade}]
        setStudentsList(sortByGrades(newStudentsList));
        setAvarage(calculateAvarage(newStudentsList));
    }

    const handleClick = (delId) => {
        const newStudentsList = studentsList.filter(curValue => curValue.id !== delId);
        setStudentsList(sortByGrades(newStudentsList));
        setAvarage(calculateAvarage(newStudentsList) || 0);
    }

    return (
        <>
            <h1>Student Grade Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter student's name" required />
                <input type="text" name="grade" placeholder="Enter student's grade" required />
                <button>Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Avarage: {avarage}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsList.map(curValue => {
                            return (
                                <tr key={curValue.id}>
                                    <td>{curValue.id}</td>
                                    <td>{curValue.name}</td>
                                    <td>{curValue.grade}</td>
                                    <td className="delTd" onClick={() => handleClick(curValue.id)}>Delete</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default StudentGradeTracker;