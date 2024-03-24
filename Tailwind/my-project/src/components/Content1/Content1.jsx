import './Content1.css'
import iphone from './images/iphone15.jpg'

import cv from './images/cv.png'

function Content1() {

    return (
        <div>
            <div className="h-screen relative" style={{ backgroundImage: `url(${iphone})`, backgroundSize: 'cover' }}>
                <div className="absolute top-400 left-0 right-0 text-center text-black">
                    <h3 className="text-5xl font-semibold">iPhone 15</h3>
                    <h4 className="text-2xl font-semibold">New Camera. New Design. Newphoria</h4>
                </div>

                <div className="absolute top-600 left-0 right-0 flex items-center justify-center ">
                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue' }}>Learn More</a>
                        <img src={cv} alt="cv" className="ml-2" />
                    </div>
                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue' }}>Buy</a>
                        <img src={cv} alt="cv" className="ml-2" />
                    </div>
                </div>
            </div>
        </div>



    )




}
export default Content1;