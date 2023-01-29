const { Schema, model } = require("mongoose");
const moment = require("moment");


//Band schema.
const bandSchema = new Schema(
  {
    bandName: {
      type: String,
      required: true,
    },  
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);



//Create the thought model for export.
const Band = model("Band", bandSchema);

//Export Thought module.
module.exports = Band;
