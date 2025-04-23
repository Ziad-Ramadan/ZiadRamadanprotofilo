"use client";
import { useState } from 'react';
import Image from 'next/image';
import img1 from '../Images/788.png';
import img2 from '../Images/build.png';
import img3 from '../Images/xo1.png';
import img4 from '../Images/334.png';
import img5 from '../Images/457.png';

const images = [
  { src: img1, alt: 'Image 1', width: 1200, height: 800, caption: 'Project 1: Voting System Using React, Tailwind and Firebase' },
  { src: img2, alt: 'Image 2', width: 1000, height: 1500, caption: 'Project 2: Build Your Computer Using Html, CSS, JavaScript, and PHP' },
  { src: img3, alt: 'Image 3', width: 500, height: 700, caption: 'Project 3: XO Game Using C# - Play vs another player or CPU' },
  { src: img4, alt: 'Image 4', width: 1200, height: 800, caption: 'Project 4: Discord Login Clone Using Next.js, TypeScript, and CSS' },
  { src: img5, alt: 'Image 5', width: 1200, height: 1400, caption: 'Project 5: Discord Landing Page Clone Using Next.js, TypeScript, and CSS' },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <h1 className='font-bold text-center text-2xl mb-8'>My Projects</h1>

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center bg-slate-200 relative"
            >
              {/* Image Component */}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain"
              />

              {/* Caption Below Image */}
              <div className='bg-slate-300 w-full flex items-center justify-center py-2'>
                <h1 className='text-black font-bold text-center px-4'>
                  {image.caption}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 ml-4 rounded bg-opacity-50 text-white p-5"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 mr-4 bg-opacity-50 rounded text-white p-5"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
