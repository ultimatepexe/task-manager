import { useEffect, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  const [tasks, updateTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    })
    updateTasks(newTasks)
  }

  function onDeleteTaskClick(taskID) {
    const newTasks = tasks.filter(task => task.id !== taskID)
    updateTasks(newTasks)
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    }
    updateTasks([...tasks, newTask])
  }

  return (
    <>
      <h1>
        Task Manager
      </h1>

      <div className='border-b-2 p-4 flex flex-col'>
        <AddTasks onAddTaskClick={onAddTaskClick} />
      </div>

      <div>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </>
  )
}

export default App
