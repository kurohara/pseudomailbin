import '../css/App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import {useState, useEffect} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([])

  const fetchFunc = async () => {
    const resp = await fetch("/api/tasks")
    const data = await resp.json();
    console.log(data)
    setTasks(data)
  }
  useEffect(() => {
		fetchFunc()
	}, [])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1001
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

    // const deleteFunc = async () => {
    //   const r = await fetch("/api/tasks/" + id, {method: 'DELETE'})
    //   fetchFunc()
    // }
    // deleteFunc()
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'  }
    </div>
  );
}

export default App;