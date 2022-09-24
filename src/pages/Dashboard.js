import React from 'react'
import '../views/Dashboard.css';
import ProjectStatistics from '../components/ProjectStatistics';
import DeadlinesStartdatesPersons from '../components/DeadlinesStartdatesPersons';

const Dashboard = () => {
  return (
      <div className='dashboard'>
        <div className='dashboard-content'>
          <ProjectStatistics />
          <DeadlinesStartdatesPersons />
        </div>
      </div>
  )
}

export default Dashboard