import { render } from '@testing-library/react';
import React, {useEffect, Component} from 'react'

export default class Students extends Component {
    constructor(props){
        super(props);
        this.state= {
            students = []
        }
    }

    componentDidMount(){
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }

render()
  return (
    <div className='row'>
        <div className="col">
            <h1 className='text-center'>Students Display</h1>
            <ul>
                {students.map(student  => 
                <li className='list-group-item' key={student.id}>{student.first_name} {student.last_name}</li>
                )}
            </ul>
        </div>
    </div>
  )
}