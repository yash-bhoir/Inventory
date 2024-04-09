import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid library
import DatePicker from 'react-datepicker'; // Importing DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker CSS

function NewSalesOrder(props) {
  const { history } = props;

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [salesOrderNumber, setSalesOrderNumber] = useState('');
  const [salesOrderDate, setSalesOrderDate] = useState(new Date());

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('https://localhost:7225/api/CurdOperations/GetAllItems');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    fetchItems();
  }, []);

  // Function to generate random 6-digit Sales Order number starting with #
  const generateSalesOrderNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    setSalesOrderNumber('#' + randomNumber);
  };

  // Function to add a new dropdown
  const addNewItem = () => {
    const newItem = { id: uuidv4(), item: null, quantity: 1, totalPrice: 0 };
    setSelectedItems([...selectedItems, newItem]);
  };

  // Function to remove a specific dropdown
  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
  };

  // Function to handle item change
  const handleItemChange = (id, value) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.findIndex(item => item.id === id);
    if (index !== -1) {
      const selectedItem = items.find(item => item.name === value);
      newSelectedItems[index].item = selectedItem;
      newSelectedItems[index].totalPrice = selectedItem ? selectedItem.sellingPrice * newSelectedItems[index].quantity : 0;
      setSelectedItems(newSelectedItems);
    }
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, value) => {
    const newSelectedItems = selectedItems.map(item => {
      if (item.id === id) {
        const quantity = parseInt(value) || 0;
        const totalPrice = quantity * (item.item ? item.item.sellingPrice : 0);
        return { ...item, quantity, totalPrice };
      }
      return item;
    });
    setSelectedItems(newSelectedItems);
  };

  // Calculate total price of all added items
  const totalItemPrice = selectedItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div style={{ margin: '20px 0 20px 220px' }}>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="header">
              <h2>New Order</h2>
            </div>
            <Form onSubmit={handleSubmit} style={{ margin: '15px 0 0px 0px' }}>
              <div className="border p-3 mb-3">
                {/* Customer Information */}
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Customer Name</label>
                      <input type="text" className="form-control" placeholder="Enter customer name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" className="form-control" placeholder="Enter phone number" pattern="[0-9]{10}" required />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                <div className="col-sm-6">
                <div className="form-group">
  <label>Order ID </label>
  <div className="input-group">
  <div className="col-sm-5">

    <input type="text" className="form-control small-input" value={salesOrderNumber} readOnly />
    </div>
    <div className="col-sm-4">
    </div>
    <div className="input-group-append">
      <Button variant="primary" onClick={generateSalesOrderNumber}>Generate</Button>
    </div>

  </div>
</div>
</div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Order Date</label>
                      <br />
                      <DatePicker
                        selected={salesOrderDate}
                        onChange={date => setSalesOrderDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border p-3 mb-3">
                {/* Payment Method and Add Item Button */}
                <Row className="mb-2">
                  <Col sm={6}>
                    <div className="form-group">
                      <label>Payment Method</label>
                      <select className="form-control" required>
                        <option value="">Select payment method</option>
                        <option value="Gpay">Gpay</option>
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </Col>
                  <Col sm={6} className="d-flex align-items-center justify-content-center">
                    <div className="form-group">
                      <Button variant="success" onClick={addNewItem} className="button">Add Item</Button>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Grouped elements */}
              <div className="border p-3 mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Payment Status</label>
                      <select className="form-control" required>
                        <option value="">Select payment status</option>
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                        <option value="inTransaction">In Transaction</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Delivery Status</label>
                      <select className="form-control" required>
                        <option value="">Select delivery status</option>
                        <option value="delivered">Delivered</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 align-self-end">
                    <div className="border p-3 mb-3">
                      <div className="form-group">
                        <label>Total Price of All Items</label>
                        <input type="text" className="form-control" value={'₹ ' + totalItemPrice.toFixed(2)} disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of grouped elements */}

              {/* Selected Items */}
              {selectedItems.map((selectedItem) => (
                <div key={selectedItem.id} className="border p-3 mb-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Selected Item</label>
                        <select className="form-control" value={selectedItem.item ? selectedItem.item.name : ''} onChange={(e) => handleItemChange(selectedItem.id, e.target.value)} required>
                          <option value="">Select item</option>
                          {items.map((item) => (
                            <option key={item.itemID} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" placeholder="Enter quantity" value={selectedItem.quantity > 0 ? selectedItem.quantity : ''} onChange={(e) => handleQuantityChange(selectedItem.id, e.target.value)} required />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" value={selectedItem.totalPrice !== 0 ? '₹ ' + selectedItem.totalPrice.toFixed(2) : ''} disabled />
                      </div>
                    </div>
                    <div className="col-sm-2 align-self-end">
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <Button variant="danger" onClick={() => removeItem(selectedItem.id)}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Save and Cancel Buttons */}
              <div className="border p-3 mb-3 d-flex justify-content-between">
                <Button variant="primary" type="submit" className="button">Save</Button>
                <Button variant="danger" className="button">Cancel</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSalesOrder;