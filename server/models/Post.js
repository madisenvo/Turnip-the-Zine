const { Schema, Types, model } = require("mongoose");
const moment = require("moment");

//post schema.
const postSchema = new Schema(
  {
    postBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//Create the thought model for export.
const Post = model("Post", postSchema);

module.exports = Post;
