import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidenavbar from './Sidenavbar';

function Itemlist() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://localhost:7225/api/CurdOperations/GetAllItems')
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
                                                    Active Items <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 offset-md-7">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <NavLink to="/NewItem" className="btn btn-primary">New</NavLink>
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
                                                    <th>NAME</th>
                                                    <th>SKU</th>
                                                    <th>TYPE</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>RATE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map(item => (
                                                    <tr key={item.itemID}>
                                                        {/* <td><input className="form-check-input" type="checkbox" name="remember" /></td> */}
                                                        <td>{item.name}</td>
                                                        <td>{item.itemID}</td>
                                                        <td>{item.manufacturer}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.sellingPrice}</td>
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

export default Itemlist;
