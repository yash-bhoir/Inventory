import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid library
import DatePicker from 'react-datepicker'; // Importing DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker CSS
import { NavLink } from 'react-router-dom';


function NewPurchase(props) {
  const { history } = props;

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [salesOrderNumber, setSalesOrderNumber] = useState('');
  const [salesOrderDate, setSalesOrderDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0); // Declare totalPrice state variable
  const [successModalShow, setSuccessModalShow] = useState(false);

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

  const addNewItem = () => {
    const newItem = { id: uuidv4(), item: '', quantity: 1, price: 0 };
    setSelectedItems([...selectedItems, newItem]);
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedItemJSON = JSON.stringify(selectedItems);
      const totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalPrice(totalPrice); // Update totalPrice state variable
      const response = await axios.post('https://localhost:7225/api/CurdOperations/ManagePurchaseDetails', {
        flag: 'I',
        purchaseID: 0,
        venderName: e.target.elements.customerName.value,
        phoneNumber: e.target.elements.phoneNumber.value,
        purchaseNumber: salesOrderNumber,
        purchaseDate: salesOrderDate.toISOString(),
        paymentMethod: e.target.elements.paymentMethod.value,
        paymentStatus: e.target.elements.paymentStatus.value,
        deliveryStatus: e.target.elements.deliveryStatus.value,
        totalPrice: totalPrice,        
        selectedItemJSON: selectedItemJSON,
      });
      console.log('API Response:', response.data);
      // Show success modal
      setSuccessModalShow(true);
      // Clear selected items
      setSelectedItems([]);
      // Reset form fields
      e.target.reset();
      // Generate new sales order number
      // generateSalesOrderNumber();
      setSalesOrderNumber('');

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleItemChange = (id, value) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.findIndex(item => item.id === id);
    if (index !== -1) {
      const selectedItem = items.find(item => item.name === value);
      newSelectedItems[index].item = selectedItem ? selectedItem.name : '';
      newSelectedItems[index].price = selectedItem ? selectedItem.sellingPrice : 0;
      setSelectedItems(newSelectedItems);
    }
  };

  const handleQuantityChange = (id, value) => {
    const newSelectedItems = selectedItems.map(item => {
      if (item.id === id) {
        const quantity = parseInt(value) || 0;
        return { ...item, quantity };
      }
      return item;
    });
    setSelectedItems(newSelectedItems);
  };

  // Calculate total price of all items
  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  }, [selectedItems]);

  return (
    <div style={{ margin: '60px 0 20px 220px' }}>
  <div className="container-fluid mt-4">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="row">
          <div className="col-md-6">
            <div className="header">
              <h2>New purchase</h2>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <NavLink to="/SalesList" className="btn btn-primary">
              Back
            </NavLink>
          </div>
        </div>

            <Form onSubmit={handleSubmit} style={{ margin: '15px 0 0px 0px' }}>
              <Modal show={successModalShow} onHide={() => setSuccessModalShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Item added successfully!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => setSuccessModalShow(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="border p-3 mb-3">
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Vender Name</label>
                      <input type="text" name="customerName" className="form-control" placeholder="Enter customer name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phoneNumber" className="form-control" placeholder="Enter phone number" pattern="[0-9]{10}" required />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>purchase ID</label>
                      <div className="input-group">
                        <input type="text" className="form-control small-input" value={salesOrderNumber} readOnly />
                        <div className="input-group-append">
                          <Button variant="primary" onClick={generateSalesOrderNumber}>Generate</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>purchase Date</label>
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
                <Row className="mb-2">
                  <Col sm={6}>
                    <div className="form-group">
                      <label>Payment Method</label>
                      <select name="paymentMethod" className="form-control" required>
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

              <div className="border p-3 mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Payment Status</label>
                      <select name="paymentStatus" className="form-control" required>
                        <option value="">Select payment status</option>
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                        <option value="inTransaction">In Transaction</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Delivery Status</label>
                      <select name="deliveryStatus" className="form-control" required>
                        <option value="">Select delivery status</option>
                        <option value="delivered">DELIVERD</option>
                        <option value="pending">PENDING</option>
                        <option value="packed">PACKED</option>
                        <option value="shipped">SHIPPED</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {selectedItems.map((selectedItem) => (
                <div key={selectedItem.id} className="border p-3 mb-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Selected Item</label>
                        <select className="form-control" value={selectedItem.item} onChange={(e) => handleItemChange(selectedItem.id, e.target.value)} required>
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
                        <input type="number" className="form-control" placeholder="Enter quantity" value={selectedItem.quantity} onChange={(e) => handleQuantityChange(selectedItem.id, e.target.value)} required />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" value={'₹ ' + (selectedItem.price * selectedItem.quantity).toFixed(2)} disabled />
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

              <div className="border p-3 mb-3 d-flex justify-content-between">
                <Button variant="primary" type="submit" className="button">Save</Button>
                <Button variant="danger" className="button">Cancel</Button>
                <div className="form-group">
                  <Button variant="info" className="button">Total Price: ₹ {totalPrice.toFixed(2)}</Button> {/* Button to display total price */}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPurchase;
