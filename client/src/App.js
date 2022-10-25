import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Admin from './pages/Admin';
import User from './pages/User';

function App() {

  return (
    <div className="App">
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