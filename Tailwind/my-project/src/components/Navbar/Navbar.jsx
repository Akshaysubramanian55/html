import React from 'react';

import myImage from './Navimage/appleicon.png';

function Navbar() {
    return (
        <nav className="flex flex-row bg-black sticky top-0 z-50">
            <div className="flex items-center justify-between w-full mx-auto px-4">
                <div className="flex items-center">
                    <img src={myImage} alt="Apple Icon" className="w-12 h-12 mr-4 md:w-10 md:h-10" />
                    <ul className="hidden md:flex list-none space-x-10">
                        <li className=" text-white"><a href="#">Store</a></li>
                        <li className=" text-white"><a href="#">Mac</a></li>
                        <li className=" text-white"><a href="#">iPad</a></li>
                        <li className=" text-white"><a href="#">iPhone</a></li>
                        <li className=" text-white"><a href="#">Vision</a></li>
                        <li className=" text-white"><a href="#">AirPod</a></li>
                        <li className=" text-white"><a href="#">TV & Home</a></li>
                        <li className=" text-white"><a href="#">Entertainment</a></li>
                        <li className=" text-white"><a href="#">Accessories</a></li>
                        <li className=" text-white"><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
        </nav>

               



    );
}

export default Navbar;
