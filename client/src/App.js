import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Admin from './pages/Admin';
import User from './pages/IndividualTrainee';
import UserCorporate from './pages/CorporateTrainee';
import Instructor from './pages/Instructor'
import Guest from './pages/Guest'

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
              path="/individualTrainee"
              element={<User />}
            />
            <Route

              path="/corporateTrainee"
              element={<UserCorporate />}
            />
            <Route
              path="/instructor/:id"
              element={<Instructor />}
            />
            <Route
              path="/guest"
              element={<Guest />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;