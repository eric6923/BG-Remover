import React from 'react';
import Img from '../assets/remove1.webp'

const Remove1 = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Instant and automatic background remover
            </h1>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">
              Our BG Remover automatically removes the background in less than 3 seconds! With our AI-powered technology, you'll be amazed at how quickly and perfectly you can remove the background in your images and get a nice transparent background. Gone are the days of tedious manual editing—just let Pixelcut's free background eraser do its wonders and you'll have images with transparent or white backgrounds in seconds. Delete background from heic, png, or jpg images in seconds. Perfect for pros and newbies alike, Pixelcut's photo background remover is your go-to tool for fast and easy editing. Also, the quality of the cutout is top-notch! If you want to remove the background in HD quality, we have you covered. Give it a try, background removal has never been easier!
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={Img}
                alt="Jewelry on green background with partial transparency"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remove1;