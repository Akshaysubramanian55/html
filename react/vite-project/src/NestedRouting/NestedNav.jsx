import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

function NestedNav(){
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/home">Home</Link> </li>
                <li> <Link to="/dashboard">Dashboard</Link> </li>

            </ul>
        </nav>
        </>
    )
}

export default NestedNav;