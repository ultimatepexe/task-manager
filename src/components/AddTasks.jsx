import { useState } from 'react'

function AddTask(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <>
            <input type="text" placeholder="Task title..." onChange={(event) => setTitle(event.target.value)} value={title} className='border rounded p-2 m-1' />
            <input type="text" placeholder="Task description..." onChange={(event) => setDescription(event.target.value)} value={description} className='border rounded p-2 m-1' />
            <button onClick={() => {
                if (!title || !description) {return}
                props.onAddTaskClick(title, description)
                setTitle("")
                setDescription("")}}>
                ADD TASK
            </button>
        </>
    )
}

export default AddTask