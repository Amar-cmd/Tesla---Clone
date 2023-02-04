import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Model3 from './components/Model3';
import ModelY from './components/ModelY';
import SolarRoof from './components/SolarRoof';
import SolarPanels from './components/SolarPanels';

// import Home from './components/Section';
// npm config set legacy-peer-deps true
// for solving installation error


function App() {
 return (
    <>
    <Router>
      <Routes>          
          <Route path="/" element={<Home/>}>          
          </Route>
      </Routes>

      <Routes>          
          <Route path="/model3" element={<Model3/>}>          
          </Route>
      </Routes>

      <Routes>          
          <Route path="/modelY" element={<ModelY/>}>          
          </Route>
      </Routes>

      <Routes>          
          <Route path="/solarroof" element={<SolarRoof/>}>          
          </Route>
      </Routes>

      <Routes>          
          <Route path="/solarpanels" element={<SolarPanels/>}>          
          </Route>
      </Routes>
  {/* </div> */}
    </Router>
    </>
  );
}

export default App;
