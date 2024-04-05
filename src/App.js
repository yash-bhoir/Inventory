import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topmenu from './Mycomponents/Topmenu';
import Dashboard from './Mycomponents/Dashboard';
import Itemlist from './Mycomponents/Itemlist';
import NewItem from './Mycomponents/Newitem';
import Sale from './Mycomponents/Sale'

function App() {
  return (
    <div>
      <Topmenu />
      {/* <Sidenavbar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Itemlist" element={<Itemlist />} />
          <Route path="/NewItem" element={<NewItem />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Purchase" element={<Sale />} />
          <Route path="/Report" element={<Sale />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
