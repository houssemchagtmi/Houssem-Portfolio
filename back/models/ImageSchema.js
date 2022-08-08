const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  title: { type: String , },
  description:{type:String, },
  image: {
    type: String,
    required:true
  },
});
module.exports = mongoose.model("Images", ImageSchema);
