import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import DashboardNav from './DashboardNav';
import Profile from './Profile';
import Settings from './Settings';

function Dashboard(){
    return(
        <>
        <Routes>
          <Route path='/' exact element={<DashboardNav/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/settings' exact element={<Settings/>}/>

        </Routes>
        </>
    )
}
export default Dashboard;