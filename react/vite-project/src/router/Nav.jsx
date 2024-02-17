import React from "react";

import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

function Nav(){
    return(
        <>

        <div>
                <nav>
                    <ul>
                        <li><Link to={'/home'}>Home</Link> </li>
                        <li><Link to={'/about/john'}>About</Link> </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav;