import { useEffect } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

//components
import ProjectDetails from "../components/ProjectDetails";
import ProjectForm from "../components/ProjectForm";

const Home = () => {
    const {projects, dispatch} = useProjectsContext();

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:5000/api/projects')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PROJECTS', payload: json})
            }
        }

        fetchProjects()
           // eslint-disable-next-line react-hooks/exhaustive-deps
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