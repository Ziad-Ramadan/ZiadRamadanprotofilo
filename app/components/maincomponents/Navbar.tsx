"use client";
import React, { useState } from 'react';

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const runnav = (): void => {
        setIsClick(!isClick);
    };

    return (
        <div>
            <nav className='bg-transparent'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <a href="/" className='text-white font-bold'> &lt;/
                                    <span className='text-red-600'>Z</span>&gt;
                                </a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center justify-between space-x-4'>
                                <a href="/" className='text-white p-2 underline-animation'>Home</a>
                                <a href="#Project" className='text-white p-2 underline-animation'>Projects</a>
                                <a href="#About" className='text-white p-2 underline-animation'>About me</a>
                                <a href="#Contact" className='text-white p-2 underline-animation'>Contact</a>
                                <a target='_blank' href="https://drive.google.com/file/d/1Pq9STx_Yv8omgLVt79ScHfHg3pXdh7kR/view?usp=sharing" className='text-white p-2 underline-animation'>Resume</a>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                                onClick={runnav}
                            >
                                {isClick ? (
                                    <svg
                                        fill="none"
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        fill="none"
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className='md:hidden'>
                        <div className='block px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a href="/" className='text-white block p-2 underline-animation'>Home</a>
                            <a href="#Project" className='text-white block p-2 underline-animation'>Projects</a>
                            <a href="#About" className='text-white block p-2 underline-animation'>About me</a>
                            <a href="#Contact" className='text-white block p-2 underline-animation'>Contact</a>
                            <a target='_blank' href="https://drive.google.com/file/d/1Pq9STx_Yv8omgLVt79ScHfHg3pXdh7kR/view?usp=sharing" className='text-white block p-2 underline-animation'>Resume</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
