import React from 'react'
import { NavLink } from 'react-router-dom';

import Sidenavbar from './Sidenavbar'

function Report(){
    return <>
    		<Sidenavbar/>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>
                    <h1>Report</h1>
                </div>
            </div>
    </>
}
export default Report