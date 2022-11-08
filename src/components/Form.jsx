import React from 'react'

export default function Form(props) {
    console.log(props)
    return (
        <div class="row">
        <div class="col my-3">
            <input type="text" class="form-control" placeholder="To-do" aria-label="First name"></input>
            <button type="button" class="btn btn-primary my-3">Submit</button>
        </div>
        </div>
        
    )
}
