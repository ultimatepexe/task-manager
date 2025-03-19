import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Tasks(props) {
    const navigate = useNavigate()

    function onViewDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
            <ul className="space-y-4 p-4 rounded-2xl mt-5">
                {props.tasks.map((task) => 
                <li className="border-b p-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`${task.isCompleted && 'line-through text-green-400'} max-w-[550px] break-words`}>
                        {task.isCompleted && <FontAwesomeIcon icon={faCheck} />}
                        {task.title}
                    </button>
                    <button onClick={() => onViewDetailsClick(task)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button onClick={() => props.onDeleteTaskClick(task.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>)}
            </ul>
    )
}

export default Tasks
