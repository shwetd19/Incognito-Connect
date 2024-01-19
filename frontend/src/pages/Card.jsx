import React from "react";

const Card = ({ imageSrc, description }) => {
  return (
    <div className="flex justify-center">
      <li className="flex items-center w-full p-4 sm:w-1/2 md:w-1/3">
        <div
          className="w-256 rounded overflow-hidden shadow-lg bg-gray-800"
          style={{ width: "512px" }}
        >
          {/* Set an absolute width (e.g., 512px) */}
          <div className="relative">
            {/* <img className="w-full" src={imageSrc} alt="Card" /> */}
          </div>
          <div className="px-6 py-4">
            {/* <div className="font-bold text-xl mb-2">Card Title</div> */}
            <p className="text-white text-base">{description}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
