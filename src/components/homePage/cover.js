import React from 'react';

const Cover = () => {
    return (
        <div className="relative w-full h-[calc(100vh-5.2rem)]">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                src="/background.mov"
            ></video>

            {/* Content Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-center max-w-80rem mx-auto">
                    {/* Heading */}
                    <h1 className="text-white text-6xl font-semibold mb-12 font-headings leading-normal">
                        Invest in Real Estate starting <br /> at just $5
                    </h1>
                    {/* Get Started Button */}
                    <button className="bg-eazy-faded text-white rounded-full py-5 px-14 hover:bg-opacity-90 transition-opacity duration-300 text-2xl font-medium">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cover;
