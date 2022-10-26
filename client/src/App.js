import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Admin from './pages/Admin';
import User from './pages/User';

import React from 'react';  
import CountryDropdown from 'country-dropdown-with-flags-for-react';  


function App() {

  return (
    <div className="App">

      <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us','eg']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   


      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="/user"
              element={<User />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;