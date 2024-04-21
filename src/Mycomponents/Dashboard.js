import React, { useState, useEffect } from 'react';
import Sidenavbar from './Sidenavbar';
import SuccessMessage from './SuccessMessage'; // Import the success message component


function Dashboard() {
  const [orderCounts, setOrderCounts] = useState(null);
  const [topSellingItem, setTopSellingItem] = useState('');
  const [topNotSellingItem, setTopNotSellingItem] = useState('');
  const [mostSellingPrice, setMostSellingPrice] = useState('');
  const [leastSellingPrice, setLeastSellingPrice] = useState('');
  const [mostSellingItemUD, setMostSellingItemUD] = useState('');
  const [leastSellingItemUD, setLeastSellingItemUD] = useState('');
  const [newTopSellingPrice, setNewTopSellingPrice] = useState('');
  const [newTopNotSellingPrice, setNewTopNotSellingPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchOrderCounts();
    fetchTopSellingItems();
  }, []);

  const fetchOrderCounts = async () => {
    try {
      const response = await fetch('https://localhost:7225/api/CurdOperations/GetOrderCountsByDeliveryStatus');
      const data = await response.json();
      setOrderCounts(data);
    } catch (error) {
      console.error('Error fetching order counts:', error);
    }
  };

  const fetchTopSellingItems = async () => {
    try {
      const response = await fetch('https://localhost:7225/api/CurdOperations/GetTopSellingItems');
      const data = await response.json();
      if (data.length > 0) {
        setTopSellingItem(data[0].mostSellingItem);
        setTopNotSellingItem(data[0].leastSellingItem);
        setMostSellingPrice(data[0].mostSellingPrice);
        setLeastSellingPrice(data[0].leastSellingPrice);
        setMostSellingItemUD(data[0].mostSellingItemUD);
        setLeastSellingItemUD(data[0].leastSellingItemUD);
        setNewTopSellingPrice(data[0].mostSellingPrice);
        setNewTopNotSellingPrice(data[0].leastSellingPrice);
      }
    } catch (error) {
      console.error('Error fetching top selling items:', error);
    }
  };

  const handleAcceptPrice = async (itemName, newPrice) => {
    const currentDate = new Date().toISOString();
    const payload = {
      itemName: itemName,
      newSellingPrice: newPrice,
      newUpdatedDate: currentDate
    };

    try {
      const response = await fetch('https://localhost:7225/api/CurdOperations/UpdateItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Price updated successfully');
        fetchTopSellingItems();
        setSuccessMessage('Price updated successfully'); // Set success message
        setTimeout(() => {
          setSuccessMessage(''); // Clear success message after 3 seconds
        }, 3000);
      } else {
        console.error('Failed to update price');
      }
    } catch (error) {
      console.error('Error updating price:', error);
    }
  };

  return (
    <>
      <div className="inventory-hub">
        <div className="container-fluid custom-container">
          <Sidenavbar />

          <div id="main">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-md-8">
                    <div className="sale_activity">
                      <div className="sales_title">Sales Activity</div>
                      <div className="sales_record">
                        <ul>
                          {orderCounts && (
                            <>
                              <li>
                                <div className="sales_pkd_qty">{orderCounts[0].packedCount}</div>
                                <div className="sales_pkd_tit">Qty</div>
                                <div className="sales_tit">To Be Packed</div>
                              </li>
                              <li>
                                <div className="sales_pkd_qty">{orderCounts[0].shippedCount}</div>
                                <div className="sales_pkd_tit">Pkgs</div>
                                <div className="sales_tit">TO BE SHIPPED</div>
                              </li>
                              <li>
                                <div className="sales_pkd_qty">{orderCounts[0].deliveredCount}</div>
                                <div className="sales_pkd_tit">Pkgs</div>
                                <div className="sales_tit">TO BE DELIVERED</div>
                              </li>
                              <li>
                                <div className="sales_pkd_qty">{orderCounts[0].pendingCount}</div>
                                <div className="sales_pkd_tit">Qty</div>
                                <div className="sales_tit">TO BE PENDING</div>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sale_activity invnt_summery">
                      <div className="sales_title">Inventory Summary</div>
                      <ul>
                        <li>QUANTITY IN HAND <span>33212</span></li>
                        <li>QUANTITY TO BE RECEIVED <span>32</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row pt-4">
                  <div className="col-md-6">
                    <div className="sale_activity">
                      <div className="sales_title">Top Selling Items</div>
                      <div className="sales_record top_selling">
                        <ul>
                          <li>
                            <div className="top_seling_itm_img"> <img src="https://media1.popsugar-assets.com/files/thumbor/oYivacUQxsjybVn80tgpJo2bahw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/10/017/n/1922398/bc378e5c_shutterstock_93720934.jpg" alt="My Image" /> </div>
                            <div className="top_seling_prod_txt big-text">{topSellingItem}</div>
                          </li>
                          <li>
                            <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>Current price of product</div>
                            <div className="top_seling_prod_txt big-text" style={{ color: 'red' }}>₹{mostSellingPrice}</div>
                            <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>DO YOU WANT TO INCREASE THE PRICE?</div>
                          </li>
                          {Math.abs(new Date().getTime() - new Date(mostSellingItemUD).getTime()) > 30 * 24 * 60 * 60 * 1000 ? (
                            <li>
                              <div className="top_seling_prod_txt big-text">Dynamic Pricing Suggestion:</div>
                              <div className="top_seling_prod_txt big-text" style={{ color: 'red' }}>₹{mostSellingPrice * 1.2}</div>
                              <button className="btn btn-primary mt-2" onClick={() => handleAcceptPrice(topSellingItem, mostSellingPrice * 1.2)}>
                                ACCEPT
                              </button>
                            </li>
                          ) : (
                            <li>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>YOUR</div>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>PRICE IS</div>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px', color: 'red' }}>UP TO DATE</div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="sale_activity">
                      <div className="sales_title">Top Not Selling Items</div>
                      <div className="sales_record top_selling">
                        <ul>
                          <li>
                            <div className="top_seling_itm_img"> <img src="https://th.bing.com/th/id/OIP._Ym14GHwAZrz238uzB_PmgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5" /></div>
                            <div className="top_seling_prod_txt big-text">{topNotSellingItem}</div>
                          </li>
                          <li>
                            <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>Current price of product</div>
                            <div className="top_seling_prod_txt big-text" style={{ color: 'red' }}>₹{leastSellingPrice}</div>
                            <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>DO YOU WANT TO DROP THE PRICE?</div>
                          </li>
                          {Math.abs(new Date().getTime() - new Date(leastSellingItemUD).getTime()) > 30 * 24 * 60 * 60 * 1000 ? (
                            <li>
                              <div className="top_seling_prod_txt big-text">Dynamic Pricing Suggestion:</div>
                              <div className="top_seling_prod_txt big-text" style={{ color: 'red' }}>₹{leastSellingPrice - (leastSellingPrice * 0.2)}</div>
                              <button className="btn btn-primary mt-2" onClick={() => handleAcceptPrice(topNotSellingItem, leastSellingPrice - (leastSellingPrice * 0.2))}>
                                ACCEPT
                              </button>
                            </li>
                          ) : (
                            <li>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>YOUR</div>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px' }}>PRICE IS</div>
                              <div className="top_seling_prod_txt big-text" style={{ fontWeight: '500', fontSize: '14px', color: 'red' }}>UP TO DATE</div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {successMessage && <SuccessMessage message={successMessage} />}


                <div className="row pt-4">
                  <div className="col-md-4">
                    <div className="sale_activity purchase_order">
                      <div className="sales_title">Purchase Order</div>
                      <ul>
                        <li>
                          <div className="purchse_txt">Quantity Ordered</div>
                          <div className="purchse_order">21.00</div>
                        </li>
                        <li>
                          <div className="purchse_txt">Total Cost</div>
                          <div className="purchse_order">Rs.14500.00</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="sale_activity sales_order">
                      <div className="sales_title">Sales Order</div>
                      <div className="sales_order_table">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Channel</th>
                              <th>Draft</th>
                              <th>Confirmed</th>
                              <th>Packed</th>
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

                {/* <div className="row pt-4">
                  <div className="col">
                    <div className="sale_activity sales_ord_summery">
                      <div className="sales_title">Sales Order Summary (in INR)</div>
                      <figure className="highcharts-figure">
                        <div id="container"></div>
                      </figure>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
} 

export default Dashboard;
