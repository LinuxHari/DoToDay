import React from 'react'
import Task from './Task'
const TasksList = ({tasks, handleDelete, handleStatus}) => {
  return (
    <>
    {
        tasks.map((task)=>{
            return( 
                <Task key = {task.id} handleDelete = {handleDelete} handleStatus = {handleStatus} />
         ) })

    }
    </>
  )
}

export default TasksList