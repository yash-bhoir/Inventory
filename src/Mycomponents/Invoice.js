// Invoice.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Invoice.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = ({ order, onBack }) => {
  const navigate = useNavigate();

  const handleDownloadInvoicePDF = () => {
    const input = document.getElementById('invoice-content');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('invoice.pdf');
      });
  };

  const handleBack = () => {
    onBack(); // Call the callback function to show the list again and hide the invoice
  };

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={handleBack}>Back to Invoice List</button>
      </div>
      <div className="container text-center mt-5">
        <div key={order.orderID} className="container mt-6 mb-7">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-7">
              <div className="card">
                <div className="card-body p-5" id="invoice-content">
                  {/* Invoice content */}
                  {/* Sample content below */}
                  <h2>Hey {order.customerName},</h2>
                  <div className="border-top border-gray-200 pt-4 mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text-muted mb-2">Order No.</div>
                        <strong>#{order.orderNumber}</strong>
                      </div>
                      <div className="col-md-6 text-md-end">
                        <div className="text-muted mb-2">Payment Date</div>
                        <strong>{new Date(order.orderDate).toLocaleDateString()}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-gray-200 mt-4 py-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text-muted mb-2">Client</div>
                        <strong>{order.customerName}</strong>
                        <p className="fs-sm">
                          {order.phoneNumber}
                          <br />
                          <a href="#!" className="text-purple">{order.customerName}@email.com</a>
                        </p>
                      </div>
                      <div className="col-md-6 text-md-end">
                        <div className="text-muted mb-2">Payment To</div>
                        <strong>Themes LLC</strong>
                        <p className="fs-sm">
                          9th Avenue, San Francisco 99383
                          <br />
                          <a href="#!" className="text-purple">themes@email.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <table className="table border-bottom border-gray-200 mt-3">
                    <thead>
                      <tr>
                        <th scope="col" className="fs-sm text-dark text-uppercase-bold-sm px-0">Description</th>
                        <th scope="col" className="fs-sm text-dark text-uppercase-bold-sm text-end px-0">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-0">Theme customization</td>
                        <td className="text-end px-0">$60.00</td> 
                      </tr>
                      <tr>
                        <td className="px-0">Website design</td>
                        <td className="text-end px-0">$80.00</td> 
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-5">
                    <div className="d-flex justify-content-end">
                      <p className="text-muted me-3">Subtotal:</p>
                      <span>$390.00</span> 
                    </div>
                    <div className="d-flex justify-content-end">
                      <p className="text-muted me-3">Discount:</p>
                      <span>-$40.00</span> 
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <h5 className="me-3">Total:</h5>
                      <h5 className="text-success">${order.totalPrice.toFixed(2)} USD</h5>
                    </div>
                  </div>
                  {/* End of sample content */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-dark mt-3" onClick={handleDownloadInvoicePDF}>Download as PDF</button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
