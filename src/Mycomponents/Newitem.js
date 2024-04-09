import React, { useState } from 'react';
import axios from 'axios';
import Sidenavbar from './Sidenavbar';
import { NavLink } from 'react-router-dom';

function NewItem({ onRecordSubmitted }) {
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
            await axios.post('https://localhost:7225/api/CurdOperations/ItemListOperations', formData);
            console.log('Record submitted successfully');
            // Reset form after successful submission
            setFormData({
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
            // Trigger reload of RecordList component
            onRecordSubmitted();
        } catch (error) {
            console.error('Error submitting record:', error.message);
        }
    };
    return (
        <>
            <Sidenavbar />
            

            <div id="NewItem" className="container mt-4">
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col">

                            <div className="row list-item-pge">
                                <div className="col-md-2">
                                    <div className="text-title">New Item</div>
                                </div>

                                <div className="col-md-3 offset-md-7">
                                    <NavLink to="/Itemlist" className="btn btn-primary">
                                        Back
                                    </NavLink>
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

                                            <div id="drop-area">
                                                <div className="drop-text">Drag and Drop Images Here</div>
                                                <div className="browsefile">
                                                    <input type="file" id="fileElem" multiple accept="image/*" className="hidden"  value={formData.image} onChange={handleChange}/>
                                                    <label className="button" htmlFor="fileElem">Browse Images</label>
                                                </div>
                                                <div id="gallery"></div>
                                                <div className="browse-msg"> You can add up to 15 images, each not exceeding 5 MB.</div>
                                            </div>
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
        </>
    );
}

export default NewItem;

