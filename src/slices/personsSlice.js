import { createSlice } from '@reduxjs/toolkit'
import { PersonsTestData } from '../components/PersonsTestData'

export const personsSlice = createSlice({
  name: 'persons',
  initialState: { person: PersonsTestData, selectedPerson: {id: 0, firstName: "", lastName: "", position: ""} },
  reducers: {
    createPerson: (state, action) => {
      state.person.push(action.payload);
    },
    deletePerson: (state, action) => {
      state.person = state.person.filter((person) => person.id !== action.payload.id);
    },
    updatePerson: (state, action) => {
      state.person.map((person) => {
        if(person.id === action.payload.id) {
          person.firstName = action.payload.firstName;
          person.lastName = action.payload.lastName;
          person.position = action.payload.position;
        }
      })
    },
    setSelectedPerson: (state, action) => {
      state.selectedPerson = action.payload;
    }
  },
})


export const { createPerson, deletePerson, updatePerson, setSelectedPerson } = personsSlice.actions

// export const selectedPerson = (state) => state.persons.selectedPerson;

export default personsSlice.reducer