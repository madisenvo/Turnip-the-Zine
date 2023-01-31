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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtDate) =>
        moment(createdAtDate).format("MMM DD, YYYY [at] hh:mm a"),
    },
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
