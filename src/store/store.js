import { configureStore } from '@reduxjs/toolkit'
import personsReducer from '../slices/personsSlice'
import projectsReducer from '../slices/projectsSlice'
import uiReducer from '../slices/uiSlice'
import dashboardReducer from '../slices/dashboardSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    persons: personsReducer,
    projects: projectsReducer,
    ui: uiReducer,
    dashboard: dashboardReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
})