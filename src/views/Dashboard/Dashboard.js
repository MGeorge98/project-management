import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import ProjectStatistics from '../../components/Dashboard/ProjectStatistics';
import DeadlinesStartdatesPersons from '../../components/Dashboard/DeadlinesStartdatesPersons';
import { useDispatch } from 'react-redux';
import { getStatistics } from '../../slices/dashboardSlice';



const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics())
  }, []);
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