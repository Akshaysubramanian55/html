import Landingnavbar from "./Landingnavbar/Landingnavbar";
import Landingfooter from "./Landingfooter/Landingfooter";
import './Landing.css'

function Landingpage(){
    return(
<>
    <Landingnavbar/>
    <div className="LandingLogin">
    <button>Login</button>
    </div>
    
    <Landingfooter/>
    </>
    )
}
export default Landingpage;