const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
   dislikes: {
    type: Array,
    default: [],
  },
   comments: {
    type: Array,
    default: [],
  },
   tags: {
    type: Array,
    default: [],
  },
    categories: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
MemeSchema.index({ name: "text" });
// MemeSchema.methods.
const Meme = mongoose.model("Meme", MemeSchema);

module.exports = Meme;
;``