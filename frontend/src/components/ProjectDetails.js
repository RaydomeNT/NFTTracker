import { useProjectsContext } from "../hooks/useProjectsContext"

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

    return (
        <div className="project-details">
            <h4>{project.title}</h4>
            <p><strong>Mint Date: </strong>{project.date}</p>
            <p><strong>Mint Time: </strong>{project.time}</p>
            <p><strong>Whitelisted: </strong>{project.wl}</p>
            <p><strong>Wallet Submitted: </strong>{project.walletSub}</p>
            <p><strong>Max Amount: </strong>{project.maxAmount}</p>
            <p><strong>Twitter Link: </strong>{project.twitterLink}</p>
            <p>{project.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default ProjectDetails;