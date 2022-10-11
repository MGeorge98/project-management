import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DASHBOARD_URL = 'http://192.168.56.1:8080/manager/api/statistics';

const initialState = {
    dashboard: {},
    isSucces: false,
    message: "",
    isLoading: false,
}

export const getStatistics = createAsyncThunk(
    "dashboard/getStatistics",
    async ( data, rejectWithValue ) => {
        try {
            const resp = await axios.get(DASHBOARD_URL);
            return resp.data;
        } catch (error) {
            return rejectWithValue(error.resp.data);
        }
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: {
        [getStatistics.pending]: (state) => {
            state.isLoading = true;
        },
        [getStatistics.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.dashboard = action.payload;
            state.isSucces = true;
        },
        [getStatistics.rejected]: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            state.isSucces = false;
        },
    }
})

export const statistics = (state) => state.dashboard.dashboard;

export default dashboardSlice.reducer;