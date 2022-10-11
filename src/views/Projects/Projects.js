import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getAllProjects } from '../../slices/projectsSlice'
import './Projects.css'
import ProjectsButtons from '../../components/Projects/ProjectsButtons'
import ProjectsList from '../../components/Projects/ProjectsList'

function Projects() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllProjects())
    // });
    return (
        <div className='projects-content'>
            <ProjectsButtons />
            <ProjectsList />
        </div>
    )
}

export default Projects