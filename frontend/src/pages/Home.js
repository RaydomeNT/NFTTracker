import { useEffect, useState } from "react";

//components
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";

const Home = () => {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:5000/api/projects')
            const json = await response.json()

            if (response.ok) {
                setProjects(json)
            }
        }

        fetchProjects()
    }, []);

    return (
        <div className="home">
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project} />
                ))}
            </div>
            <ProjectForm />
        </div>
    )
}

export default Home;