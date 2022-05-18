import '../css/App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([])

  const fetchFunc = async () => {
    const resp = await fetch("/api/tasks")
    const data = await resp.json();
    setTasks(data)
  }
  useEffect(() => {
		fetchFunc()
	}, [])

  const fetchTask = async (id) => {
    const resp = await fetch(`/api/tasks/${id}`)
    const data = await resp.json()
    return data
  }

  const addTask = (task) => {
    const addTaskFunc  = async () => {
      const res = await fetch(`/api/tasks`, 
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task)
        }
      )
      fetchFunc();
    }

    addTaskFunc()
  }

  const deleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id))

    const deleteFunc = async () => {
      const r = await fetch(`/api/tasks/${id}`, {method: 'DELETE'})
      fetchFunc()
    }
    deleteFunc()
  }

  const toggleReminder = (id) => {
    (async () => {
      const task = await fetchTask(id)
      task.reminder  = ! task.reminder
      const resp = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      fetchFunc()
    })()

    // setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)))
  }

  return (
    <Router>
        <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          <Routes>
            <Route path='/' exact element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'  }
              </>
            } />
            <Route path='/about' element={<About/>} />
          </Routes>
          <Footer/>
        </div>
   </Router>
  );
}

export default App;