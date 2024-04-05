import React from 'react'
import Sidenavbar from './Sidenavbar'
import Topmenu from './Topmenu'
import { NavLink } from 'react-router-dom';



function NewItem() {
    return <>
            {/* <Topmenu/> */}
    		<Sidenavbar/>

        <div id="NewItem">
            <div class="row">
                <div class="col">

                    <div class="row list-item-pge">
                        <div class="col-md-2">
                            <div class="text-title">New Item</div>
                        </div>

                        <div class="col-md-3 offset-md-7">
                        <NavLink to="/Itemlist" className="btn btn-primary">
													Back
												</NavLink>
                        </div>
                    </div>


                    <div class="row item-new-top">
                        <div class="col">

                            <div class="row item-border">
                                <div class="col-md-5">


                                    <div class="row">
                                        <div class="col">
                                            <div class="new-item-label">Type</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" checked />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Goods
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" checked />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Services
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt-4">
                                        <div class="col">
                                            <div class="new-item-label">Name</div>
                                        </div>
                                    </div>
                                    <div class="row pt-1">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Name" name="" />
                                        </div>
                                    </div>

                                    <div class="row pt-4">
                                        <div class="col">
                                            <div class="new-item-label">SKU</div>
                                        </div>
                                    </div>
                                    <div class="row pt-1">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="SKU" name="" />
                                        </div>
                                    </div>
                                    <div class="row pt-4">
                                        <div class="col">
                                            <div class="new-item-label">Unit</div>
                                        </div>
                                    </div>
                                    <div class="row pt-1">
                                        <div class="col">
                                            <select class="form-control">
                                                <option>Select or type to add</option>
                                                <option>Dozens</option>
                                                <option>Box</option>
                                                <option>Grams</option>
                                                <option>Meters</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Returnable Item
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-7">

                                    <div id="drop-area">
                                        <div class="drop-text">Drag and Drop Images Here</div>
                                        <div class="browsefile">
                                            <input type="file" id="fileElem" multiple accept="image/*"
                                                class="hidden" />
                                            <label class="button" for="fileElem">Browse Images</label>
                                        </div>
                                        <div id="gallery"></div>
                                        <div class="browse-msg"> You can add up to 15 images, each not exceeding 5
                                            MB.</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="row pt-3 pb-5">
                            <div class="col-md-6">

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">Dimensions <span>(Length X Width X
                                            Height)</span></div>
                                    </div>
                                </div>

                                <div class="row pt-1">
                                    <div class="col">
                                        <div class="item-demension">
                                            <div class="dimension">
                                                <input type="text" class="form-control" placeholder="Length"
                                                    name="" />
                                            </div>
                                            <span>x</span>
                                            <div class="dimension">
                                                <input type="text" class="form-control" placeholder="Width" name="" />
                                            </div>
                                            <span>x</span>
                                            <div class="dimension">
                                                <input type="text" class="form-control" placeholder="Height"
                                                    name="" />
                                            </div>
                                            <div class="dimen-select">
                                                <select class="form-control">
                                                    <option>cm</option>
                                                    <option>in</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">Manufacturer</div>
                                    </div>
                                </div>
                                <div class="row pt-1">
                                    <div class="col">
                                        <select class="form-control">
                                            <option>Select or Add Manufacturer</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">UPC</div>
                                    </div>
                                </div>
                                <div class="row pt-1">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="UPC" name="" />
                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">EAN</div>
                                    </div>
                                </div>
                                <div class="row pt-1">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="EAN" name="" />
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">Weight</div>
                                    </div>
                                </div>

                                <div class="row pt-1">
                                    <div class="col">
                                        <div class="item-demension">
                                            <div class="dimension">
                                                <input type="text" class="form-control" placeholder="Length"
                                                    name="" />
                                            </div>
                                            <div class="dimen-select">
                                                <select class="form-control">
                                                    <option>cm</option>
                                                    <option>in</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">Brand</div>
                                    </div>
                                </div>

                                <div class="row p1">
                                    <div class="col">
                                        <select class="form-control">
                                            <option>Select or Add a Brand</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">MPN</div>
                                    </div>
                                </div>

                                <div class="row p1">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="MPN" name="" />
                                    </div>
                                </div>

                                <div class="row pt-4">
                                    <div class="col">
                                        <div class="new-item-label">ISBN</div>
                                    </div>
                                </div>

                                <div class="row p1">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="ISBN" name="" />
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div class="row item-border">
                            <div class="col">


                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckChecked2" checked />
                                            <label class="form-check-label" for="flexCheckChecked2">
                                                Sales Information
                                            </label>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Selling Price</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="INR" name="" />
                                            </div>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Account</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <select class="form-control">
                                                    <option>Sales</option>
                                                    <option>Discount</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Description</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <textarea class="form-control"></textarea>
                                            </div>
                                        </div>




                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckChecked3" checked />
                                            <label class="form-check-label" for="flexCheckChecked3">
                                                Purchase Information
                                            </label>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Cost Price</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="INR" name="" />
                                            </div>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Account</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <select class="form-control">
                                                    <option>Cost of Goods Sold</option>
                                                    <option>Discount</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Description</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <textarea class="form-control"></textarea>
                                            </div>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Preferred Vendor</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <select class="form-control">
                                                    <option></option>
                                                    <option>Yash Patil</option>
                                                </select>
                                            </div>
                                        </div>




                                    </div>
                                </div>



                            </div>
                        </div>


                        <div class="row pt-5">
                            <div class="col">


                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check ">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckChecked2" checked />
                                            <label class="form-check-label" for="flexCheckChecked2">
                                                Track Inventory for this item
                                                <span class="track-inven">You cannot enable/disable inventory
                                                    tracking once you've created transactions for this item</span>
                                            </label>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Inventory Account</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <select class="form-control">
                                                    <option>Sales</option>
                                                    <option>Discount</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Opening Stock</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Opening Stock"
                                                    name="" />
                                            </div>
                                        </div>


                                        <div class="row pt-4">
                                            <div class="col">
                                                <div class="new-item-label">Reorder Point</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Reorder Point"
                                                    name="" />
                                            </div>
                                        </div>




                                    </div>

                                    <div class="col-md-6">

                                        <div class="row pt-4 mt-5">
                                            <div class="col">
                                                <div class="new-item-label">Opening Stock Rate per Unit</div>
                                            </div>
                                        </div>

                                        <div class="row p1">
                                            <div class="col">
                                                <input type="text" class="form-control"
                                                    placeholder="Opening Stock Rate per Unit..." name="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="row pt-5 item-save">
                            <div class="col">

                                <ul>
                                    <li><button class="item-btn">Save</button></li>
                                    <li><button class="item-btn item-btn-white">Cancel</button></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NewItem