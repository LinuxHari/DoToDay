import './App.css';
import Header from './Header';
import { useState } from 'react';
import Content from './Content';
import AddItem from './AddItem';
import { useEffect } from 'react';
import ApiRequest from './ApiRequest';
import SearchItem from './SearchItem';

function App() {
  const API_URL  = "http://localhost:8080/tasks"

  const [tasks,setTasks] = useState([])

  const [newTask , setNewTask] = useState('');

  const [error,setError] = useState(null); 

  const [search,setSearch] = useState('');

  const handleStatus = (id) => {
    setTasks(tasks)
    const taskStatusChange = tasks.filter((task)=>{
      return task.id === id})
    const reqURL = `${API_URL}/${id}`
    const methodsObj = {method : "PATCH",headers:{'Content-Type':"application/json"},body:JSON.stringify({status:!taskStatusChange[0].status})}
    const result = ApiRequest(reqURL,methodsObj)
    if(result.error){
      setError(result.error)
    }
  }

  const handleDelete = (id) => {
    setTasks(tasks)
    const reqURL = `${API_URL}/${id}`
    const methodsObj = {method : "DELETE"}
    const result = ApiRequest(reqURL,methodsObj)
    if(result.error){
      setError(result.error)
    }
  }

  const addItem = () => {
    const id = tasks.length? tasks[tasks.length - 1].id + 1:1
    setTasks(tasks)
    setNewTask('')
    const methodsObj = {method : "POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({id,name:newTask,status:false})}
    const result = ApiRequest(API_URL,methodsObj)
    if(result.error){
      setError(result.error)
    }
  }

  useEffect(() => {
    const fetchTasks = async() => {
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw("Error while fetching data...")
      const taskList = await response.json()
      setTasks(taskList)
    }
    catch(err){
      setError(err)
    }
    }
    (async () => fetchTasks())()
  },[tasks])

  return (
    <>
    <Header/>
    <SearchItem search={search} setSearch={setSearch}/>
    <AddItem  newTask = {newTask} setNewTask = {setNewTask} addItem={addItem}/>
    {error && <p>{`${error}`}</p>}
    {!error && <Content tasks = {tasks.filter((task) => {
      return task.name.toLowerCase().includes(search.toLocaleLowerCase())
    })} 
    
    setTasks = {setTasks} handleStatus = {handleStatus} handleDelete={handleDelete}/>
    }</>
  );
}

export default App;
