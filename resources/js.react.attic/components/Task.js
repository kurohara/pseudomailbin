import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
    // return (<h3 className='task' key={task.id}>{task.text}</h3>)
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}{' '}
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
