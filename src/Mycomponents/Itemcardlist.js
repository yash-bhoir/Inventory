import React from 'react'

import Sidenavbar from './Sidenavbar'



function itemcardlist() {
  return (
    <>
    <div class="inventory-hub">
	<div class="container-fluid custom-container">

		
    <Sidenavbar/>
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
								<div class="add-new">+ New</div>
							</div>
							<div class="col-md-5 list-tab-card">
								<ul>
									<li><a href="item-list.html"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
									<li> <a href="card-list.html" class="active"><i class="fa fa-th-large" aria-hidden="true"></i></a> </li>
								</ul>
							</div>
							<div class="col-md-3">
								<div class="list-rgt-drop"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
							</div>
						</div>
					</div>
				</div>


				<div class="row pt-4 card-list-mode">
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/bed.png"/></div>
							<div class="card-prod-name">Queen Bed</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/sofa.png"/></div>
							<div class="card-prod-name">Full Size Sofa</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/wooden-chair.png"/></div>
							<div class="card-prod-name">Wooden Chair</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/coffee-table.png"/></div>
							<div class="card-prod-name">Tea Big Table</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/table.png"/></div>
							<div class="card-prod-name">Table Big Size</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/wardrobe.png"/></div>
							<div class="card-prod-name">Wardrobe</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/bookshelves.png"/></div>
							<div class="card-prod-name">Book Shelves</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="list-card-data">
							<div class="card-img"><img src="images/cabinet.png"/></div>
							<div class="card-prod-name">Wooden Cabinet</div>
							<div class="card-in-data"><span>SKU:</span> Item 2 sku</div>
							<div class="card-in-data card-sel-price"><span>Selling Price :</span> Rs.5249.00</div>
						</div>
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

export default itemcardlist