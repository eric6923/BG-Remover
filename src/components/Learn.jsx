import React from 'react';

const Learn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            How to remove background from a picture
          </h1>
          <p className="text-gray-600 text-lg">
            Follow these simple steps to remove backgrounds from your images
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Step 1 */}
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                1. Upload your Image
              </h2>
              <p className="text-gray-600 text-center">
                Upload a JPG, PNG or HEIC file. Try to choose an image where the subject has clear edges.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                2. Remove Background
              </h2>
              <p className="text-gray-600 text-center">
                Pixelcut will automatically remove the background from your image. Once the background is removed, you can refine the cutout if you need to.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                3. Download Image
              </h2>
              <p className="text-gray-600 text-center">
                Download your new cutout image to share, or keep editing and add new background details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;