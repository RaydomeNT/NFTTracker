import { useProjectsContext } from "../hooks/useProjectsContext"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from 'react';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import {enGB} from 'date-fns/locale';

const ProjectDetails = ({ project }) => {
    const { dispatch } = useProjectsContext();
    const { user } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false); // To track if the user is currently editing the project

    const handleClick = async () => {
        if(!user){
            return
        }

        const response = await fetch('http://localhost:5000/api/projects/' + project._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json});
        }
    };

    const handleEdit = () => {
        setIsEditing(true); // Set isEditing to true when the user clicks the edit button
    };

    const handleSave = async () => {
        // Add code here to update the project data in the backend API
        setIsEditing(false); // Set isEditing to false after the project data has been updated
    };

    return (
        <div className="project-details">
            {isEditing ? (
                // Show the edit form when isEditing is true
                <div>
                    <input type="text" defaultValue={project.title} />
                    <input type="text" defaultValue={project.price} />
                    {/* Add more input fields for the project properties that you want the user to edit */}
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                // Show the project details when isEditing is false
                <>
                    <h4>{project.title}</h4>
                    <p><strong>Mint Price: </strong>{project.price}</p>
                    <p><strong>Mint Date: </strong>{format(new Date(project.date), "do MMM yyyy", { locale: enGB })}</p>
                    <p><strong>Mint Time: </strong>{project.time}</p>
                    <p><strong>Whitelisted: </strong>{project.wl}</p>
                    <p><strong>Wallet Submitted: </strong>{project.walletSub}</p>
                    <p><strong>Max Amount: </strong>{project.maxAmount}</p>
                    <p><strong>Twitter Link: </strong><a href={project.twitterLink}>{project.twitterLink}</a></p>
                    <p>{formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}</p>
          
                    <button id='edit' className="material-symbols-outlined" onClick={handleEdit}>edit</button>
                    <span id='delete' className="material-symbols-outlined" onClick={handleClick}>delete</span>
                </>
            )}
        </div>
    )
}

export default ProjectDetails;
