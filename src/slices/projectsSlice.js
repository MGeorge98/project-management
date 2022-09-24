import { createSlice } from '@reduxjs/toolkit'
import { ProjectsTestData } from '../components/ProjectsTestData';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: { value: ProjectsTestData },
    reducers: {
        createProject: (state, action) => {
            console.log("ACTION.PAYLOAD:",action.payload)
            state.value.push(action.payload);
        },
    },
})


export const { createProject } = projectsSlice.actions

export default projectsSlice.reducer