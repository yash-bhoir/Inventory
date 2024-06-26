import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidenavbar from './Sidenavbar';

function SalesList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://localhost:7225/api/CurdOperations/GetAllOrdersDetails')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="inventory-hub">
                <div className="container-fluid custom-container">
                    <Sidenavbar />
                    <div id="main">
                        <div className="row">
                            <div className="col">
                                <div className="row list-item-pge">
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
                                            <NavLink to="/NewSalesOrder" className="btn btn-primary">New</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col item-table">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    {/* <th><input className="form-check-input" type="checkbox" name="remember" /></th> */}
                                                    <th>order Number</th>
                                                    <th>customer Name</th>
                                                    <th>order Date</th>
                                                    <th>payment Status</th>
                                                    <th>totalPrice</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map(item => (
                                                    <tr key={item.itemID}>
                                                        {/* <td><input className="form-check-input" type="checkbox" name="remember" /></td> */}
                                                        <td>{item.orderNumber}</td>
                                                        <td>{item.customerName}</td>
                                                        <td>{item.orderDate}</td>
                                                        <td>{item.paymentStatus}</td>
                                                        <td>{item.totalPrice}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SalesList;
