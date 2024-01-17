import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import Card from "./Card";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const { currentUser } = useSelector((state) => state.user);

  // const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/message", {
          method: "POST",
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user has already made a post
    if (messages.some((msg) => msg.username === currentUser.username)) {
      setErrorMessage("Single user cannot make multiple posts");
      return;
    }

    const name = currentUser.username;
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
    <div className="main bg-gray-900">
      <h1 className="text-white text-center text-2xl font-bold">
        Post Fearlessly, Connect Freely, Anywhere.
      </h1>

      <ul className="cards">
        {cardData.map((card, index) => (
          <Card key={index} description={card.description} />
        ))}
      </ul>
      <button
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full text-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setOpen(true)}
      >
        Create Post
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-80">
          <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-blue-500 font-bold mb-6">
              Post Something
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
                  defaultValue={currentUser?.username || ""}
                  className="px-0 py-2 rounded-md bg-gray-800 text-white focus:border-blue-500 text-center font-bold"
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
                  placeholder="What's on your mind?"
                  className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:border-blue-500"
                  required
                  type="text"
                ></textarea>
                {/* Image Upload If the user want to make a insta post */}
                {/* <label
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
                /> */}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 focus:outline-white text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
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
