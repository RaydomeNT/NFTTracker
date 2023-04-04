import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectForm = () => {
    const { dispatch } = useProjectsContext()
    const {user} = useAuthContext();

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [wl, setWl] = useState('')
    const [walletSub, setWalletSub] = useState('')
    const [maxAmount, setMaxAmount] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const project = {title, price, date, time, wl, walletSub, maxAmount, twitterLink}

        const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json();

    if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
        setTitle('')
        setPrice('')
        setDate('')
        setTime('')
        setWl('')
        setWalletSub('')
        setMaxAmount('')
        setTwitterLink('')
        setError(null)
        setEmptyFields([])
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
                className={emptyFields.includes('title') ? 'error' : ''}
                />
                
            <label>Mint Price:</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
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

            <label>Whitelisted:</label>
                <select value={wl} onChange={(e) => setWl(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

            <label>Wallet Submitted:</label>
                <select value={walletSub} onChange={(e) => setWalletSub(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="DTC">DTC</option>
                </select>

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