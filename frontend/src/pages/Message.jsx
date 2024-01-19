import React from "react";

export default function Post() {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-1g shadow-md">
      <h2 className="text-3x1 text-center text-pink-600 font-bold mb-6">
        Contact Us
      </h2>
      <form action="">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Your Name
          </label>
          <input
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-ig bg-gray-800 focus:border-blue-500"
            required
            type="text"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Your Message
          </label>
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full px-3 py-2 border rounded-ig bg-gray-800 focus:border-blue-500"
            required
            type="text"
          ></textarea>
        </div>
        {/* <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor=""></label>
        <input placeholder="" className="w-full px-3 py-2 border rounded-ig bg-gray-800 focus:border-blue-500" required type="text"></input>
        </div> */}

        <div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
