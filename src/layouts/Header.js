import React from 'react'
import '../views/Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';



const Header = () => {
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
    </React.Fragment>
  )
}

export default Header