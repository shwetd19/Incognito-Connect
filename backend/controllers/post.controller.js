import Post from "../models/post.model.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { username, Message } = req.body;

    if (!username || !Message) {
      return res
        .status(400)
        .json({ error: "Username and message are required" });
    }

    const newPost = new Post({
      username,
      Message,
    });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    // Handle other errors
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all posts
// Get all posts and return only the 'Message'
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    const messages = posts.map(post => post.Message);
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { createPost, getPosts };
