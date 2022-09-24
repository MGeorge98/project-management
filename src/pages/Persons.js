import React from 'react'
import '../views/Projects.css'
import PersonsButtons from '../components/PersonsButtons';
import PersonsList from '../components/PersonsList';

function Persons() {
  return (
    <div className='projects-content'>
      <PersonsButtons />
      <PersonsList />
    </div>
  )
}

export default Persons