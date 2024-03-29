import React, { useState } from "react";
import Modal from "../components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          Message: message,
        }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        setOpen(false);
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <main className="App">
      <button
        className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded-full"
        onClick={() => setOpen(true)}
      >
        Delete
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-80">
          <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:border-blue-500"
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:border-blue-500"
                  required
                  type="text"
                ></textarea>
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="mb-4"
                />

                {/* Add the "Post" button here */}
                {/* <div>
                  <button
                    type="submit"
                    className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
                  >
                    Post
                  </button>
                </div> */}
              </div>

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
        </div>
      </Modal>
    </main>
  );
}
