import React, {useState, useEffect} from 'react'

export default function Students(props) {
    const [students, setStudents] = useState([])

    useEffect(() =>{
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => setStudents(data))
    })
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
