import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topmenu from './Mycomponents/Topmenu';
import Dashboard from './Mycomponents/Dashboard';
import Itemlist from './Mycomponents/Itemlist';
import NewItem from './Mycomponents/Newitem';
import Sale from './Mycomponents/Sale'
import Purchase from './Mycomponents/Purchase'
import Report from './Mycomponents/Report'

function App() {
  return (
    <Router>
      <div>
        <Topmenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Itemlist" element={<Itemlist />} />
          <Route path="/NewItem" element={<NewItem />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
