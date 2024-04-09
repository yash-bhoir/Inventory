import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidenavbar from './Sidenavbar';
import NewSalesOrder from './NewSalesOrder';

function Sale() {
    return (
        <>
            <Sidenavbar />
                <div>
                    <h1>Sale</h1>
                    <NewSalesOrder/>
                </div>
            
        </>
    );
}

export default Sale;
