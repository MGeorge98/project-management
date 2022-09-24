import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Persons from './pages/Persons';
import Sidebar from './layouts/SideBar';
import Header from './layouts/Header';
import { createMuiTheme, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#7f7f7f'
    },
    secondary: {
      main: '#2d2d2d'
    }
  },
  typography: {
    h6: {
      fontWeight: 'bold'
    }
  }
})


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Sidebar />
            <Header />
            <div className="content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/persons" element={<Persons />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;