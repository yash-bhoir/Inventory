import React from 'react'
import { NavLink } from 'react-router-dom';

import Sidenavbar from './Sidenavbar'

function Purchase(){
    return <>
    		<Sidenavbar/>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>
                    <h1>Purchase</h1>
                </div>
            </div>    </>
}
export default Purchase