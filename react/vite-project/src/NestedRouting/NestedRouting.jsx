import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import NestedNav from './NestedNav';
function NestedRouting(){
    return(
        <Router>
            <>
            <Routes>
                <Route path='/' exact element={<NestedNav/>}/>
                <Route path='/home' exact element={<Home/>}/>
                <Route path='/dashboard/*' exact element={<Dashboard/>}/>
            </Routes>
            </>
        </Router>
    )
}
export default NestedRouting;