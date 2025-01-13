import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Varsha from './component/Varsha';
import Kamlesh from './component/Kamlesh';
import Govind from './component/Govind';
import Nisha from './component/Nisha';
import Nikita from './component/Nikita';
import Abhi from './component/Abhi';
import Contact from './component/Contact';
import About from './component/About';

const App = () => {
  return (
    <div className="homebody">
      <BrowserRouter>
        <div id="Ahead">
          <div className="Aheader">
            <h1>Indian Tourism</h1>
          </div>
          <div className="Ateam-container">
            <div className="Ateam">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Home</button>
              </NavLink>
            </div>

            <div className="Ateam">
              <NavLink
                to="/kamlesh"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Wild</button>
              </NavLink>
            </div>
            <div className="Ateam">
              <NavLink
                to="/govind"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Historical</button>
              </NavLink>
            </div>

            <div className="Ateam">
              <NavLink
                to="/cities"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Cities</button>
              </NavLink>
            </div>

            <div className="Ateam">
              <NavLink
                to="/nisha"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Honeymoon</button>
              </NavLink>
            </div>

            <div className="Ateam">
              <NavLink
                to="/divine"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Divine</button>
              </NavLink>
            </div>
          
            <div className="Ateam">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>Contact</button>
              </NavLink>
            </div>

            <div className="Ateam">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <button>About</button>
              </NavLink>
            </div>

           
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divine" element={<Varsha />} />
          <Route path="/kamlesh" element={<Kamlesh />} />
          <Route path="/govind" element={<Govind />} />
          <Route path="/nisha" element={<Nisha />} />
          <Route path="/cities" element={<Nikita />} />
          <Route path="/abhi" element={<Abhi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
