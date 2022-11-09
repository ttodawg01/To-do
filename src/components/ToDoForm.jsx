import React from 'react'

export default function ToDoForm(props) {

    return (
        <form onSubmit={props.HandleFormSubmit}>
            <div className='form-group'>
                <input type="text" name="texting" className='form-control' placeholder='Enter To-Do' />
                <input type="submit" className='btn btn-success my-3' value="Add To-Do" />
            </div>
        </form>
    )
}

