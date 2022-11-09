import React from 'react'
import TodoCards from './TodoCards';
import ToDoForm from './ToDoForm'

export default function ToDo(props) {
    let tasks = ['Create', 'Add', 'Display', 'Allow'];
  return (
    <>
        <h1>Listing</h1>
        < ToDoForm/>
        <div className="row">
            {tasks.map((task, idx) => <TodoCards task={task} key={idx} />)}
        </div>
    </>
  )
}
