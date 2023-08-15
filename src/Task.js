import React from 'react'
import { MdDelete } from 'react-icons/md'

const Task = (task, handleDelete, handleStatus) => {
  return (
            <li className='container'>
            <input type='checkbox' name="status" checked = {task.status} onClick={() => handleStatus(task.id)} tabIndex={0}/>
            <label htmlFor='status' onClick={() => handleStatus(task.id)} style = {{textDecoration:task.status===true?'line-through':'None'}}>{task.name}</label> &nbsp;
            <button onClick = {() => handleDelete(task.id)}><MdDelete/></button>                   
            </li>
  )
}

export default Task