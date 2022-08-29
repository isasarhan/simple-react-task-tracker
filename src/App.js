import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React from 'react'
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] =  useState([
    {
        id:'1',
        text : 'Doctor Appointment',
        day: 'Friday',
        reminder: 'true'
    },
    {
      id:'2',
      text : 'Game Appointment',
      day: 'Tuesday',
      reminder: 'true'
  },
  {
    id:'3',
    text : 'Study Appointment',
    day: 'monday',
    reminder: 'true'
},]
  )
  const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=>task.id !== id))
  }
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task}
    setTasks(...tasks, newTask)
  }
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd = {() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No Tasks to Show'}  
    </div>
  );
}

export default App;