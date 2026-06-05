import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../assets/error/error404.png';
import phoneImage from '../assets/error/phone404.png';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <style>
                {`
                    .bg-404 { background-image: url(${phoneImage}); }
                    @media (min-width: 768px) {
                        .bg-404 { background-image: url(${errorImage}); }
                    }
                `}
            </style>
            <div
                className="fixed inset-0 z-[100] bg-404 bg-[60%_center] sm:bg-center bg-cover bg-no-repeat overflow-hidden font-sans"
            >
                {/* Text and Button positioned over the palm on the right side */}
                <div className="absolute top-[40%] sm:top-[55%] md:top-[50%] lg:top-[40%] right-[-20%] md:right-[-14%] lg:right-[10%] xl:right-[10%] transform -translate-y-1/2 flex flex-col items-center w-full max-w-xl px-4 md:px-8 lg:w-[45%] text-center">
                    <h1 className="text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold text-white leading-[0.85] tracking-tighter mb-2 md:mb-4 drop-shadow-lg">
                        404
                    </h1>
                    <p className="text-white text-[13px] sm:text-sm md:text-base lg:text-[18px] font-medium leading-relaxed max-w-[200px] sm:max-w-md mx-auto drop-shadow-md">
                        Oops! It seems this page has vanished into thin air.<br className="hidden sm:block" />
                        Just take a deep breath and let the adventure<br className="hidden sm:block" />
                        continue!
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 sm:mt-6 lg:mt-8 bg-white text-[#A32626] font-bold px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl shadow-xl hover:bg-gray-100 transition-colors duration-300 text-[13px] sm:text-sm lg:text-base"
                    >
                        Back To Homepage
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotFound;
