import React from 'react'
import Sidenavbar from './Sidenavbar'


function Dashboard() {
  return (
    <>
    <div class="inventory-hub">
	<div class="container-fluid custom-container">
	
		<Sidenavbar/>

		<div id="main">		
		<div class="row">
			<div class="col">
				
				<div class="row">
					<div class="col-md-8">
						<div class="sale_activity">
							<div class="sales_title">Sales Activity</div>
							<div class="sales_record">
								<ul>
									<li>
										<div class="sales_pkd_qty">52</div>
										<div class="sales_pkd_tit">Qty</div>
										<div class="sales_tit">To Be Packed</div>
									</li>
										<li>
										<div class="sales_pkd_qty">40</div>
										<div class="sales_pkd_tit">Pkgs</div>
										<div class="sales_tit">TO BE SHIPPED</div>
									</li>
										<li>
										<div class="sales_pkd_qty">68</div>
										<div class="sales_pkd_tit">Pkgs</div>
										<div class="sales_tit">TO BE DELIVERED</div>
									</li>
										<li>
										<div class="sales_pkd_qty">98</div>
										<div class="sales_pkd_tit">Qty</div>
										<div class="sales_tit">TO BE INVOICED</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sale_activity invnt_summery">
							<div class="sales_title">SaInventory Summary</div>
							<ul>
								<li>QUANTITY IN HAND <span>33212</span></li>
								<li>QUANTITY TO BE RECEIVED <span>32</span></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="row pt-4">
					<div class="col-md-6">
						<div class="sale_activity">
							<div class="sales_title">Top Selling Items</div>
							{/* <!-- <div class="invet-data-filter">Date</div> --> */}
										<div class="sales_record top_selling">
								<ul>
									<li>
										<div class="top_seling_itm_img"> <img src="images/bed.png" alt="My Image" /> </div>
										<div class="top_seling_prod_txt">Queen Size Bed</div>
										<div class="top_seling_prod_size">116<span>Kg</span></div>
									</li>
									<li>
										<div class="top_seling_itm_img"> <img src="images/sofa.png" alt="My Image" /> </div>
										<div class="top_seling_prod_txt">Big Size Sofa</div>
										<div class="top_seling_prod_size">166<span>Kg</span></div>
									</li>
									<li>
										<div class="top_seling_itm_img"> <img src="images/cabinet.png" alt="My Image" /> </div>
										<div class="top_seling_prod_txt">Storage Cabinet</div>
										<div class="top_seling_prod_size">350<span>Kg</span></div>
									</li>
										
								</ul>
							</div>
							
						</div>
					</div>
							<div class="col-md-6">
						<div class="sale_activity">
							<div class="sales_title">Top Not Selling Items</div>
							 {/* <div class="invet-data-filter">Date</div>  */}
										<div class="sales_record top_selling">
								<ul>
									<li>
										<div class="top_seling_itm_img"> <img src="images/bed.png"/></div>
										<div class="top_seling_prod_txt">Queen Size Bed</div>
										<div class="top_seling_prod_size">116<span>Kg</span></div>
									</li>
									<li>
										<div class="top_seling_itm_img"> <img src="images/sofa.png"/></div>
										<div class="top_seling_prod_txt">Big Size Sofa</div>
										<div class="top_seling_prod_size">166<span>Kg</span></div>
									</li>
									<li>
										<div class="top_seling_itm_img"> <img src="images/dummy_image.png"/></div>
										<div class="top_seling_prod_txt">Storage Cabinet</div>
										<div class="top_seling_prod_size">350<span>Kg</span></div>
									</li>
										
								</ul>
							</div>
							
						</div>
					</div>
				</div>

				<div class="row pt-4">
					<div class="col-md-4">
								<div class="sale_activity purchase_order">
							<div class="sales_title">Purchase Order</div>
							<ul>
									<li>
										<div class="purchse_txt">Quantity Ordered</div>
										<div class="purchse_order">2.00</div>
									</li>
										<li>
										<div class="purchse_txt">Total Cost</div>
										<div class="purchse_order">Rs.14500.00</div>
									</li>
							</ul>
						</div>
					</div>
					<div class="col-md-8">
						<div class="sale_activity sales_order">
							<div class="sales_title">Sales Order</div>
							<div class="sales_order_table">
								 <table class="table table-bordered">
							    <thead>
							      <tr>
							        <th>Channel</th>
							        <th>Draft</th>
							        <th>Confirmed</th>
							        <th>Packed	</th>
							        <th>Shipped</th>
							        <th>Invoiced</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>Direct Sales</td>
							        <td>22</td>
							        <td>52</td>
							        <td>76</td>
							        <td>20</td>
							        <td>32</td>
							      </tr>
							         <tr>
							        <td>Indirect Sales</td>
							        <td>44</td>
							        <td>62</td>
							        <td>10</td>
							        <td>20</td>
							        <td>32</td>
							      </tr>
							        <tr>
							        <td>Sales</td>
							        <td>54</td>
							        <td>82</td>
							        <td>20</td>
							        <td>10</td>
							        <td>32</td>
							      </tr>
							    </tbody>
							  </table>
							</div>
						</div>
					</div>

				</div>

				<div class="row pt-4">
					<div class="col">
						<div class="sale_activity sales_ord_summery">
						<div class="sales_title">Sales Order Summary (in INR)</div>
						<figure class="highcharts-figure">
    <div id="container"></div>
    
</figure>
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

export default Dashboard