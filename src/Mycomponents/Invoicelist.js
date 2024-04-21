// InvoiceList.js
import React, { useState, useEffect } from 'react';
import Sidenavbar from './Sidenavbar';
import Invoice from './Invoice';

function InvoiceList() {
  const [items, setItems] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to store selected order
  const [showInvoice, setShowInvoice] = useState(false); // State to control visibility of the invoice

  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:7225/api/CurdOperations/GetAllOrdersDetails')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDownload = (orderId) => {
    // Find the selected order
    const order = items.find(item => item.orderID === orderId);
    setSelectedOrder(order); // Set the selected order in the state
    setShowInvoice(true); // Show the invoice
  };

  const handleBack = () => {
    setShowInvoice(false); // Hide the invoice
  };

  return (
    <>
      <div className="inventory-hub">
        <div className="container-fluid custom-container">
          <Sidenavbar />
          <div id="main">
            <div className="row">
              <div className="col">
                {showInvoice ? (
                  <Invoice order={selectedOrder} onBack={handleBack} />
                ) : (
                  <>
                    <div className="row list-item-pge">
                      {/* Render the list here */}
                      <div className="col-md-2">
                        <div className="active-item">
                          <div className="dropdown">
                            <button type="button" data-bs-toggle="dropdown">
                              Order List <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 offset-md-7">
                        <div className="row">
                          <div className="col-md-4">
                            <button className="btn btn-primary">New</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-4">
                      <div className="col item-table">
                        {/* Render the table here */}
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Order Number</th>
                              <th>Customer Name</th>
                              <th>Order Date</th>
                              <th>Payment Status</th>
                              <th>Total Price</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map(item => (
                              <tr key={item.orderID}>
                                <td>{item.orderNumber}</td>
                                <td>{item.customerName}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.paymentStatus}</td>
                                <td>{item.totalPrice}</td>
                                <td>
                                <button className="btn btn-secondary" onClick={() => handleDownload(item.orderID)}>
  <i className="fa fa-download"></i>
</button>

                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceList;
