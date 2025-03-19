import { useNavigate, useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
        <>
            <div className="flex border-b-1 p-4 mb-8 gap-4 break-all break-words justify-center">
                <button onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1>
                    {title}
                </h1>
            </div>
            <div className="break-all break-words justify-center">
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}

export default TaskPage