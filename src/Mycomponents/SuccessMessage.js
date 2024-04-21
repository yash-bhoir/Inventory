import React from 'react';

function SuccessMessage({ message }) {
  return (
    <div className="success-message">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="alert alert-success mt-4" role="alert">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
