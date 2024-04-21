import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Sidenavbar from './Sidenavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


function ItemManagement() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        flag: "I",
        unit: "ui",
        itemID: 0,
        name: '',
        image: '',
        brand: '',
        manufacturer: '',
        sellingPrice: '',
        costPrice: '',  
        description: '',
        preferredVendor: ''
    });
    const [editMode, setEditMode] = useState(false); // State variable to track edit mode
    const [editItemID, setEditItemID] = useState(null); // State variable to store the ID of the item being edited

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('https://localhost:7225/api/CurdOperations/GetAllItems');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the PUT request with updated data
            await axios.post(`https://localhost:7225/api/CurdOperations/ItemListOperations/`, {
                flag: "U",
                itemID: editItemID,
                name: formData.name,
                unit: formData.unit,
                image: formData.image,
                brand: formData.brand,
                manufacturer: formData.manufacturer,
                sellingPrice: parseFloat(formData.sellingPrice), // Convert to number
                costPrice: parseFloat(formData.costPrice), // Convert to number
                description: formData.description,
                preferredVendor: formData.preferredVendor
            });
    
            console.log('Record updated successfully');
    
            // Show success message using a popup (you can use any library for this, like Material-UI Dialog)
            alert('Record updated successfully');
    
            // Clear form data
            setFormData({
                flag: "I",
                unit: "string",
                itemID: 0,
                name: '',
                image: '',
                brand: '',
                manufacturer: '',
                sellingPrice: '',
                costPrice: '',
                description: '',
                preferredVendor: ''
            });
    
            // Fetch updated items
            fetchItems();
    
            // Exit edit mode after submission
            setEditMode(false);
        } catch (error) {
            console.error('Error submitting record:', error.message);
        }
    };
    
    
    const handleEdit = (itemID) => {
        const itemToEdit = items.find(item => item.itemID === itemID);
        setFormData(itemToEdit);
        setEditItemID(itemID);
        setEditMode(true); // Enter edit mode
    };

    const handleDelete = async (itemID) => {
        // Show confirmation popup
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        
        // If user confirms deletion
        if (isConfirmed) {
            try {
                // Send DELETE request to delete the item
                await axios.post(`https://localhost:7225/api/CurdOperations/ItemListOperations/`, {
                    flag: "D",
                    itemID: itemID,
                    name: "", // Placeholder for name
                    unit: "", // Placeholder for unit
                    image: "", // Placeholder for image
                    brand: "", // Placeholder for brand
                    manufacturer: "", // Placeholder for manufacturer
                    sellingPrice: 0, // Placeholder for sellingPrice
                    costPrice: 0, // Placeholder for costPrice
                    description: "", // Placeholder for description
                    preferredVendor: "" // Placeholder for preferredVendor
                });
    
                console.log('Record deleted successfully');
    
                // Show success message using a popup (you can use any library for this)
                alert('Record deleted successfully');
    
                // Fetch updated items
                fetchItems();
            } catch (error) {
                console.error('Error deleting record:', error.message);
            }
        }
    };
    
    
    
    

    return (
        <>
            <Sidenavbar />
            {!editMode && ( // Show the item list when not in edit mode
                <div className="inventory-hub">
                    <div className="container-fluid custom-container">
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
                                                        <th>NAME</th>
                                                        <th>SKU</th>
                                                        <th>TYPE</th>
                                                        <th>DESCRIPTION</th>
                                                        <th>PRICE</th>
                                                        <th>ACTIONS</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.map(item => (
                                                        <tr key={item.itemID}>
                                                            <td>{item.name}</td>
                                                            <td>{item.itemID}</td>
                                                            <td>{item.manufacturer}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.sellingPrice}</td>
                                                            <td>
                                                            <div className="row">
    <div className="col">
        <IconButton onClick={() => handleEdit(item.itemID)}>
            <EditIcon />
        </IconButton>
    </div>
    <div className="col">
    <IconButton onClick={() => handleDelete(item.itemID)}>
                <DeleteIcon />
            </IconButton>
    </div>
</div>
                                                            </td>
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
            )}

            {editMode && ( // Show the form in edit mode
            <div id="NewItem" className="container mt-4 maindivadd">
<form onSubmit={handleSubmit} style={{ marginLeft: '220px', marginTop: '5px', marginBottom: '5px', marginRight: '-50px' }}>
 
                     <div className="row">
                         <div className="col">
 
                             <div className="row list-item-pge">
                                 <div className="col-md-2">
                                     <div className="text-title">New Item</div>
                                 </div>
 
                                 <div className="col-md-3 offset-md-7">
                                 <div className="col-md-3 offset-md-7">
                                        <button className="btn btn-primary" onClick={() => setEditMode(false)}>Back</button>
                                    </div>
                                 </div>
                             </div>
 
                             <div className="row item-new-top">
                                 <div className="col">
 
                                     <div className="row item-border">
                                         <div className="col-md-5">
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Name</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Brand</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Brand" name="brand" value={formData.brand} onChange={handleChange} />
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Manufacturer</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Selling Price</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Selling Price" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} />
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Cost Price</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Cost Price" name="costPrice" value={formData.costPrice} onChange={handleChange} />
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Description</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <textarea className="form-control" placeholder="Description" name="description" value={formData.description} onChange={handleChange}></textarea>
                                                 </div>
                                             </div>
 
                                             <div className="row pt-4">
                                                 <div className="col">
                                                     <div className="new-item-label">Preferred Vendor</div>
                                                 </div>
                                             </div>
                                             <div className="row pt-1">
                                                 <div className="col">
                                                     <input type="text" className="form-control" placeholder="Preferred Vendor" name="preferredVendor" value={formData.preferredVendor} onChange={handleChange} />
                                                 </div>
                                             </div>
 
                                         </div>
 
                                         <div className="col-md-7">
 
                                             {/* <div id="drop-area">
                                                 <div className="drop-text">Drag and Drop Images Here</div>
                                                 <div className="browsefile">
                                                     <input type="file" id="fileElem" multiple accept="image/*" className="hidden"  value={formData.image} onChange={handleChange}/>
                                                     <label className="button" htmlFor="fileElem">Browse Images</label>
                                                 </div>
                                                 <div id="gallery"></div>
                                                 <div className="browse-msg"> You can add up to 15 images, each not exceeding 5 MB.</div>
                                             </div> */}
                                         </div>
                                     </div>
 
                                 </div>
                             </div>
 
                             {/* Add more sections of the form as needed */}
 
 
                             <div className="row item-save">
                         <div className="col">
                             <ul className="d-flex justify-content-between"> {/* Use Bootstrap flex utilities for alignment */}
                                 <li><button type="submit" className="item-btn">Save</button></li>
                                 <li><NavLink to="/Itemlist" className="item-btn cancel-btn">Cancel</NavLink></li>
                             </ul>
                         </div>
                     </div>
                         </div>
                     </div>
                 </form>
             </div>
            )}
        </>
    );
}

export default ItemManagement;
