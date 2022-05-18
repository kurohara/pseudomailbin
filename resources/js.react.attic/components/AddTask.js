import { useState } from 'react'

function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add Task')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" name="" id="" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Day &amp; Time</label>
                <input type="text" name="" id="" placeholder="Add Day &amp; Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" name="" id="" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
