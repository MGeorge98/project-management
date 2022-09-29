import React from 'react'
import './Dashboard.css';
import ProjectStatistics from '../../components/Dashboard/ProjectStatistics';
import DeadlinesStartdatesPersons from '../../components/Dashboard/DeadlinesStartdatesPersons';

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