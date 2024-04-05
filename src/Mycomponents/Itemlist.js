import React from 'react'
import Sidenavbar from './Sidenavbar'
import { NavLink } from 'react-router-dom';





function Itemlist() {
	return (
		<>
			<div class="inventory-hub">
				<div class="container-fluid custom-container">

					<Sidenavbar />

					<div id="main">
						<div class="row">
							<div class="col">

								<div class="row list-item-pge">
									<div class="col-md-2">
										<div class="active-item">
											<div class="dropdown">
												<button type="button" data-bs-toggle="dropdown">
													Active Items <i class="fa fa-angle-down" aria-hidden="true"></i>

												</button>
												<ul class="dropdown-menu">
													<li><a class="dropdown-item" href="#">Link 1</a></li>
													<li><a class="dropdown-item" href="#">Link 2</a></li>
													<li><a class="dropdown-item" href="#">Link 3</a></li>
												</ul>
											</div>
										</div>
									</div>

									<div class="col-md-3 offset-md-7">
										<div class="row">
											<div class="col-md-4">
												<NavLink to="/NewItem" className="btn btn-primary">
													 New
												</NavLink>
											</div>
											<div class="col-md-5 list-tab-card">
												<ul>
													<li><a href="item-list.html" class="active"><img src="images/table-grid.png" /></a></li>
													<li> <a href="card-list.html"><img src="images/cardview.png" /></a> </li>
												</ul>
											</div>
											<div class="col-md-3">
												<div class="list-rgt-drop"><img src="images/dots.png" width={20} /></div>
											</div>
										</div>
									</div>
								</div>

								<div class="row pt-4">
									<div class="col item-table">
										<table class="table table-bordered">
											<thead>
												<tr>
													<th><input class="form-check-input" type="checkbox" name="remember" /></th>
													<th>NAME</th>
													<th>SKU</th>
													<th>TYPE</th>
													<th>DESCRIPTION</th>
													<th>RATE</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td> <img src="images/bed.png" /> King Size Bed</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="images/bed.png" /> Big Size Table</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="images/bed.png" /> Executive Office Chair Rug</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="images/bed.png" /> Coffe Table</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="img/bed.png" /> Queen Size Bed</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="img/bed.png" /> Cabinet</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="images/bed.png" /> Cloth Wardrobe</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>
												<tr>
													<td><input class="form-check-input" type="checkbox" name="remember" /></td>
													<td><img src="images/bed.png" /> Patio Dining Set</td>
													<td>Item sku 1</td>
													<td>Service</td>
													<td>a soft, high-quality area rug to add..</td>
													<td>Rs88788.00</td>
												</tr>

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
	)
}

export default Itemlist