import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../assets/error/error404.png';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className="fixed inset-0 z-[100] bg-center bg-cover bg-no-repeat overflow-hidden font-sans"
            style={{ backgroundImage: `url(${errorImage})` }}
        >
            {/* Text and Button positioned over the palm on the right side */}
            <div className="absolute top-[40%] right-0 md:right-[10%] lg:right-[10%] xl:right-[10%] transform -translate-y-1/2 flex flex-col items-center w-full max-w-xl px-4 lg:w-[45%] text-center">
                <h1 className="text-[7rem] sm:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold text-white leading-[0.85] tracking-tighter mb-4 drop-shadow-lg">
                    404
                </h1>
                <p className="text-white text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed max-w-md mx-auto drop-shadow-md">
                    Oops! It seems this page has vanished into thin air.<br />
                    Just take a deep breath and let the adventure<br />
                    continue!
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-6 lg:mt-8 bg-white text-[#A32626] font-bold px-8 py-3.5 rounded-xl shadow-xl hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base"
                >
                    Back To Homepage
                </button>
            </div>
        </div>
    );
};

export default NotFound;
