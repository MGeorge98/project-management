import React from 'react'
import '../views/Projects.css'
import ProjectsButtons from '../components/ProjectsButtons'
import ProjectsList from '../components/ProjectsList'

function Projects() {
    return (
        <div className='projects-content'>
            <ProjectsButtons />
            <ProjectsList />
        </div>
    )
}

export default Projects