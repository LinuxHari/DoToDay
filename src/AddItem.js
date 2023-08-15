import React from 'react'
import './AddItem.css'
import { useRef } from 'react'

const AddItem = ({newTask,setNewTask,addItem}) => {
  const addRef = useRef()
  return (
    <form className='Add-Form' onSubmit={(e) => e.preventDefault()}>
        <input className='Add-Item' type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} required autoFocus ref={addRef}/>
        <input className='Add-Item-Button' type="submit" value="Add Item" onClick={addItem} onChange={addRef.current}/>
    </form>
  )
}

export default AddItem