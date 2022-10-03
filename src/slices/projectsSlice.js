import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PROJECTS_URL = 'http://192.168.56.1:8080/manager/api/project/all';

const CREATE_PROJECT_URL = 'http://192.168.56.1:8080/manager/api/project';

const initialState = {
  projects: [],
  selectedProject: {},
  selectedStatus: "IN_PROGRESS",
  isSucces: false,
  message: "",
  isLoading: false,
}

export const getAllProjects = createAsyncThunk(
  "projects/getAllProjects",
  async ( data, rejectWithValue ) => {
    try {
      const resp = await axios.get(PROJECTS_URL);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const createNewProject = createAsyncThunk(
  "projects/createNewProject", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.post(CREATE_PROJECT_URL, data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "persons/deleteProject", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.delete('http://192.168.56.1:8080/manager/api/project?projectId='+data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const updateProject = createAsyncThunk(
  "persons/updateProject", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.put('http://192.168.56.1:8080/manager/api/project?projectId='+data.id, data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
  extraReducers: {
    [getAllProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProjects.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.projects = action.payload;
      state.isSucces = true;
    },
    [getAllProjects.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSucces = false;
    }
  }
})


export const { setSelectedProject } = projectsSlice.actions;
export const projects = (state) => state.projects.projects;
export const selectedProject = (state) => state.projects.selectedProject;
export default projectsSlice.reducer