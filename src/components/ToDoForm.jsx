import React from 'react'

export default function ToDoForm(props) {
    return (
        <form>
            <div className='form-group'>
                <input type="text" name="" className='form-control' placeholder='Enter To-Do' />
                <input type="submit" className='btn btn-success my-3' value="Add To-Do" />
            </div>
        </form>
    )
}

