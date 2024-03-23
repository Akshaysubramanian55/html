import myImage from './Navimage/appleicon.png'; 
function Navbar() {
    return (
        <nav className=" flex flex-row">
            <div className="flex items-center justify-between "> 
                <div>
                    <img src={myImage} alt="Apple Icon" className="w-8 h-8" /> 
                </div>

                <div className=" flex items-center"> 
                    <ul className="list-none flex "> 
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">store</a></li> 
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">mac</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">ipad</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">iphone</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">vision</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">Airpod</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">Tv & Home</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">Entertainment</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">Accessories</a></li>
                        <li className="mr-20 mt-2 text-blue-500"><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
