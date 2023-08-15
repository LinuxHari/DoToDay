import React from 'react'
import { MdDelete } from 'react-icons/md'
import './Content.css'

const Content = ({tasks , handleStatus , handleDelete}) => {
  return (
    <ul>
        {
            tasks.map((task)=>{
                return( 
                    <li className='container'>
                    <input type='checkbox' name="status" checked = {task.status} onClick={() => handleStatus(task.id)} tabIndex={0}/>
                    <label htmlFor='status' onClick={() => handleStatus(task.id)} style = {{textDecoration:task.status===true?'line-through':'None'}}>{task.name}</label> &nbsp;
                    <button onClick = {() => handleDelete(task.id)}><MdDelete/></button>                   
                    </li>
             ) })

        }
    </ul>
  )
}

export default Content