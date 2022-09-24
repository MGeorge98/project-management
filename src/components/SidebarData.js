import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Projects",
        icon: <AccountTreeIcon />,
        link: "/projects"
    },
    {
        title: "Persons",
        icon: <PeopleAltIcon />,
        link: "/persons"
    }
]