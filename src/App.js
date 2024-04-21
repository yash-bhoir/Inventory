import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Topmenu from './Mycomponents/Topmenu';
import Dashboard from './Mycomponents/Dashboard';
import Itemlist from './Mycomponents/Itemlist';
import NewItem from './Mycomponents/Newitem';
import Sale from './Mycomponents/Sale';
import Purchase from './Mycomponents/Purchase';
import Report from './Mycomponents/Report';
import NewSalesOrder from './Mycomponents/NewSalesOrder';
import SalesList from './Mycomponents/SalesList';
import NewPurchase from './Mycomponents/NewPurchase';
import PurchaseList from './Mycomponents/PurchaseList';
import Invoice from './Mycomponents/Invoice';
import InvoiceList from './Mycomponents/Invoicelist';
import Signin from './Mycomponents/Login';
import SignUp from './Mycomponents/Signup';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast



function App() {
  return (
    
    <Router>
      <div>
      <ToastContainer />
        <Routes>
          {/* Set the default route to render the Signin component */}
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />


          {/* Other routes */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Itemlist" element={<Itemlist />} />
          <Route path="/NewItem" element={<NewItem />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/NewSalesOrder" element={<NewSalesOrder />} />
          <Route path="/SalesList" element={<SalesList />} />
          <Route path="/NewPurchase" element={<NewPurchase />} />
          <Route path="/PurchaseList" element={<PurchaseList />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/InvoiceList" element={<InvoiceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
