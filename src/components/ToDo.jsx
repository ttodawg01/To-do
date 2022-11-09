import React, { useState } from 'react'
import TodoCards from './TodoCards';
import ToDoForm from './ToDoForm';

export default function ToDo(props) {
    const [tasks, setTasks] = useState([]);

    function HandleFormSubmit(event){
        event.preventDefault();
        let newTask = event.target.texting.value
        setTasks([...tasks, newTask])
        event.target.texting.value = '';
    }

  return (
    <>
        <h1>Listing</h1>
        < ToDoForm HandleFormSubmit={HandleFormSubmit}/>
        <div className="row">
            {tasks.map((task, idx) => <TodoCards task={task} key={idx} />)}
        </div>
    </>
  )
}
