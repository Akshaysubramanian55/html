import { Link } from "react-router-dom";

function DashboardNav(){
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/dashboard/profile">Profile</Link> </li>
                <li> <Link to="/dashboard/settings">Settings</Link> </li>

            </ul>
        </nav>
        </>
    )
}
export default DashboardNav