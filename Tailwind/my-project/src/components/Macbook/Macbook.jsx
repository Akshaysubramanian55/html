import './Mackbook.css'
import Macbook from './images/macbook.jpg'
import cv from './images/cv.png'



function Macbookcontent() {

    return (
        <div>
          
                <div className="absolute top-400 left-0 right-0 text-center text-black">
                    <h3 className="text-5xl font-semibold">MacBook Pro</h3>
                    <h4 className="text-2xl font-semibold">Mind Blowing.Head Turning</h4>
                </div>

                <div className="flex items-center justify-center ">
                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue' }}>Learn More</a>
                        <img src={cv} alt="cv" className="ml-2" />
                    </div>
                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue' }}>Buy</a>
                        <img src={cv} alt="cv" className="ml-2" />
                    </div>
                </div>
                <div>
                <img src={Macbook} alt="" />
                </div>
            </div>
        


    )
}
export default Macbookcontent;