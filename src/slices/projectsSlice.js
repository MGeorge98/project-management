import { createSlice } from '@reduxjs/toolkit'
import { ProjectsTestData } from '../components/ProjectsTestData';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: { project: ProjectsTestData, selectedProject: {} },
    reducers: {
        createProject: (state, action) => {
            // console.log("ACTION.PAYLOAD:",action.payload)
            state.project.push(action.payload);
        },
        deleteProject: (state, action) => {
            state.project = state.project.filter((project) => project.id !== action.payload.id);
        },
        updateProject: (state, action) => {
            state.project.map((project) => {
              if(project.id === action.payload.id) {
                project.title = action.payload.title;
                project.description = action.payload.description;
                project.startDate = action.payload.startDate;
                project.deadline = action.payload.deadline;
                project.endDate = action.payload.endDate;
                
              }
            })
          },
        setSelectedProject: (state, action) => {
            state.selectedProject= action.payload;
        }
    },
})


export const { createProject, setSelectedProject, deleteProject, updateProject } = projectsSlice.actions

// export const selectedProject = (state) => state.project.selectedProject;

export default projectsSlice.reducer