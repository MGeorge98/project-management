import React from 'react'
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';
import {SidebarData} from '../../components/SidebarData';
import { useDispatch } from 'react-redux';
import { toggleSelectedStatus } from '../../slices/uiSlice';




const Header = () => {
  const dispatch = useDispatch();
  const handleNav = (value) => {
    {window.location.pathname = value.link}
    dispatch(toggleSelectedStatus("ALL"))
  }
  return (
    <React.Fragment>
      <section>
        <div className="header">
          <div className="header-title">{window.location.pathname.substring(1)}</div>
          <div className="user">
            <Button sx={{ mr: 5 }} color='secondary' endIcon={<AccountCircleIcon fontSize="large" />}><Typography fontWeight={800}>George M.</Typography></Button>
          </div>
        </div>
      </section>
      <section>
            <div className="sidebar">
                <div className="logo-text">PLANNER</div>
                <div className="menu-text">Menu</div>
                <div className="sidebar-data">
                  <ul className='sidebar-list'>
                    {SidebarData.map((value, key) => {
                      return (
                        <li 
                        className='row'
                        id={window.location.pathname === value.link ? "active" : ""}
                        key={key} onClick={() => handleNav(value)}
                        >
                          <span className='icon'>{value.icon}</span>
                          <span className='title'>{value.title}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Header