const ProjectDetails = ({ project }) => {
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
        </div>
    )
}

export default ProjectDetails;