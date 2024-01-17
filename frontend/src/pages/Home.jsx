import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import Modal from "../components/Modal";
import Card from "./Card";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const { currentUser } = useSelector((state) => state.user); // Get currentUser from Redux store

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/message", {
          method: "POST", // Change to POST
        });
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    fetchMessages();
  }, []); // Empty dependency array to run the effect only once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = currentUser.username; // Use currentUser.username instead of reading from the input
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

  const cardData = messages.map((message, index) => ({
    description: message,
  }));

  return (
    <div className="main">
      <ul className="cards">
        {cardData.map((card, index) => (
          <Card key={index} description={card.description} />
        ))}
      </ul>
      <button
        className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded-full"
        onClick={() => setOpen(true)}
      >
        Post Something
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-80">
          <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">
              Create Post
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  id="name"
                  placeholder={currentUser.username}
                  className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:border-blue-500 text-center" // Updated class
                  required
                  type="text"
                  disabled
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
    </div>
  );
};

export default Home;
