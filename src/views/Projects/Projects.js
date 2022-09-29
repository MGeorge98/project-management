import React from 'react'
import './Projects.css'
import ProjectsButtons from '../../components/Projects/ProjectsButtons'
import ProjectsList from '../../components/Projects/ProjectsList'

function Projects() {
    return (
        <div className='projects-content'>
            <ProjectsButtons />
            <ProjectsList />
        </div>
    )
}

export default Projects