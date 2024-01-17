import React from 'react';

const Card = ({ imageSrc, description }) => {
  return (
    <li className="flex items-center justify-center w-full p-4 sm:w-1/2 md:w-1/3">
      <div className="w-128 rounded overflow-hidden shadow-xl" style={{ width: '256px' }}>
        {/* Set an absolute width (e.g., 256px) */}
        <div className="relative">
          {/* <img className="w-full" src={imageSrc} alt="Card" /> */}
        </div>
        <div className="px-6 py-4">
          {/* <div className="font-bold text-xl mb-2">Card Title</div> */}
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
