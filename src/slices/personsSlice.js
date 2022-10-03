import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { PersonsTestData } from '../components/PersonsTestData'
import axios from 'axios';

const PERSONS_URL = 'http://192.168.56.1:8080/manager/api/person/all';

const CREATE_PERSON_URL = 'http://192.168.56.1:8080/manager/api/person/create';

const initialState = {
  persons: [],
  selectedPerson: {},
  isSucces: false,
  message: "",
  isLoading: false,
};

export const getAllPersons = createAsyncThunk(
  "persons/getAllPersons",
  async ( data, rejectWithValue ) => {
    try {
      const resp = await axios.get(PERSONS_URL);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const createNewPerson = createAsyncThunk(
  "persons/createNewPerson", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.post(CREATE_PERSON_URL, data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const deletePerson = createAsyncThunk(
  "persons/deletePerson", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.delete('http://192.168.56.1:8080/manager/api/person/delete?personId='+data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const updatePerson = createAsyncThunk(
  "persons/updatePerson", 
  async(data, rejectWithValue) => {
    try {
      const resp = await axios.put('http://192.168.56.1:8080/manager/api/person/update?personId='+data.id, data);
      return resp.data
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  }
);

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
      setSelectedPerson: (state, action) => {
        state.selectedPerson = action.payload;
      }
    },
    extraReducers: {
      [getAllPersons.pending]: (state) => {
        state.isLoading = true;
      },
      [getAllPersons.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.persons = action.payload;
        state.isSucces = true;
      },
      [getAllPersons.rejected]: (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.isSucces = false;
      },
    }
  })


export const { setSelectedPerson } = personsSlice.actions

export const selectedPerson = (state) => state.persons.selectedPerson;

export default personsSlice.reducer