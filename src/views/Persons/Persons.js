import React from 'react'
import './Persons.css'
import PersonsButtons from '../../components/Persons/PersonsButtons';
import PersonsList from '../../components/Persons/PersonsList';

function Persons() {
  return (
    <div className='projects-content'>
      <PersonsButtons />
      <PersonsList />
    </div>
  )
}

export default Persons