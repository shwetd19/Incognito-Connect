import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    Message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);

// export default User;
