import React from "react";

const PageHeader = ({ title, buttonText, clickHandler, showButton }) => {
    return (
        <div className='flex flex-row p-4 space-x-11'>
            <div className="flex justify-center items-center">
                <p className='text-2xl font-bold light:text-dark'>{title}</p>
            </div>
            <div className="">
                {showButton &&
                    <button
                        onClick={clickHandler}
                        className="relative inline-block text-lg group"
                    >
                        <span className="relative z-10 block px-5 py-1 overflow-hidden font-medium leading-tight text-[#28282B] transition-colors duration-300 ease-out border-2 border-[#28282B] rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-1 rounded-lg bg-white"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#28282B] group-hover:-rotate-180 ease"></span>
                            <span className="relative">{buttonText}</span>
                        </span>
                        <span
                            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#28282B] rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                        ></span>
                    </button>                
                }
            </div>
        </div>
    );
};

export default PageHeader;