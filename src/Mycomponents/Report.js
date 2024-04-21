import React from 'react'
import { NavLink } from 'react-router-dom';

import Sidenavbar from './Sidenavbar'
import Invoice from './Invoice'
import InvoiceList from './Invoicelist'



function Report(){
    return <>
    		<Sidenavbar/>
           <InvoiceList/>
           {/* <Invoice/> */}
    </>
}
export default Report