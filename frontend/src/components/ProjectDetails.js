import { useProjectsContext } from "../hooks/useProjectsContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import {enGB} from 'date-fns/locale';

const ProjectDetails = ({ project }) => {
    const { dispatch } = useProjectsContext();

    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/api/projects/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
        }
    }

    const editClick = async () => {
        const response = await fetch('http://localhost:5000/api/projects/' + project._id, {
            method: 'UPDATE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_PROJECT', payload: json})
        }
    }

    return (
        <div className="project-details">
            <h4>{project.title}</h4>
            <p><strong>Mint Price: </strong>{project.price}</p>
            <p><strong>Mint Date: </strong>{format(new Date(project.date), "do MMM yyyy", { locale: enGB })}</p>
            <p><strong>Mint Time: </strong>{project.time}</p>
            <p><strong>Whitelisted: </strong>{project.wl}</p>
            <p><strong>Wallet Submitted: </strong>{project.walletSub}</p>
            <p><strong>Max Amount: </strong>{project.maxAmount}</p>
            <p><strong>Twitter Link: </strong>{project.twitterLink}</p>
            <p>{formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}</p>
            <span id='edit' className="material-symbols-outlined" onClick={editClick}>edit</span><br></br>
            <span id='delete' className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ProjectDetails;