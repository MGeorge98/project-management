import React from 'react'
import '../views/SideBar.css'
import {SidebarData} from '../components/SidebarData'

const Sidebar = () => {
  return (
    <React.Fragment>
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
                        key={key} onClick={() => {window.location.pathname = value.link}}
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

export default Sidebar