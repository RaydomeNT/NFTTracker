import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

const ProjectForm = () => {
    const { dispatch } = useProjectsContext()

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [wl, setWl] = useState('')
    const [walletSub, setWalletSub] = useState('')
    const [maxAmount, setMaxAmount] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const project = {title, date, time, wl, walletSub, maxAmount, twitterLink}

        const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json();

    if (!response.ok) {
        setError(json.error)
    }
    if (response.ok) {
        setTitle('')
        setDate('')
        setTime('')
        setWl('')
        setWalletSub('')
        setMaxAmount('')
        setTwitterLink('')
        setError(null)
        console.log("new project added", json)
        dispatch({type: 'CREATE_PROJECT', payload: json})
    }
}

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>

            <label>Project Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />

            <label>Mint Date:</label>
            <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />

            <label>Time of Mint:</label>
            <input
                type="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                />

            <label>Have Whitelist:</label>
            <input
                type="text"
                onChange={(e) => setWl(e.target.value)}
                value={wl}
                />

            <label>Wallet Submitted:</label>
            <input
                type="text"
                onChange={(e) => setWalletSub(e.target.value)}
                value={walletSub}
                />

            <label>Max Amount per Mint:</label>
            <input
                type="number"
                onChange={(e) => setMaxAmount(e.target.value)}
                value={maxAmount}
                />

            <label>Twitter Link:</label>
            <input
                type="text"
                onChange={(e) => setTwitterLink(e.target.value)}
                value={twitterLink}
                />

                <button>Add Project</button>
                {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default ProjectForm;