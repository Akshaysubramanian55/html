import React from "react";
import cv from './Images/cv.png';
import './Pod.css';
import Airpod from './Images/airpod.jpg';
import Watch from './Images/watch.jpg';

function Pod() {
    return (
        <div className="flex">
            <div className="relative">
                <img src={Airpod} alt="Airpod" className="h-96 w-auto object-cover" />
                <div className="absolute top-0 left-0 right-0 p-8 text-center text-white">
                    <h4 className="text-5xl font-semibold">Airpod</h4>
                    <h4 className="text-2xl font-semibold">Adaptive Audio. Now Playing</h4>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center mr-4">
                            <a href="#" className="text-skyblue">Learn More</a>
                            <img src={cv} alt="cv" className="ml-1" />
                        </div>
                        <div className="flex items-center justify-center">
                            <a href="#" className="text-skyblue">Buy</a>
                            <img src={cv} alt="cv" className="ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img src={Watch} alt="Watch" className="h-96 w-auto object-cover pl-10" />
                <div className="absolute top-0 left-0 right-0 p-8 text-center text-white">
                    <h4 className="text-5xl font-semibold">Watch</h4>
                    <h4 className="text-red-500">Series 9</h4>
                    <h4 className="text-2xl font-semibold">Smarter. Brighter. Better</h4>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center mr-4">
                            <a href="#" className="text-skyblue">Learn More</a>
                            <img src={cv} alt="cv" className="ml-1" />
                        </div>
                        <div className="flex items-center justify-center">
                            <a href="#" className="text-skyblue">Buy</a>
                            <img src={cv} alt="cv" className="ml-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pod;
