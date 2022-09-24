import { createSlice } from '@reduxjs/toolkit'
import { PersonsTestData } from '../components/PersonsTestData'

export const personsSlice = createSlice({
  name: 'persons',
  initialState: { person: PersonsTestData, selectedPerson: {} },
  reducers: {
    createPerson: (state, action) => {
      state.value.push(action.payload);
    },
    deletePerson: (state, action) => {
      state.value = state.value.filter((person) => person.id !== action.payload.id);
    },
    setSelectedPerson: (state, action) => {
      state.selectedPerson = action.payload;
    }
  },
})


export const { createPerson, deletePerson, setSelectedPerson } = personsSlice.actions

export const selectedPerson = (state) => state.person.selectedPerson;

export default personsSlice.reducer