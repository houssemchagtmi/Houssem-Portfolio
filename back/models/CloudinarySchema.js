const mongoose = require("mongoose");
const CloudinarySchema = mongoose.Schema({
  title: { type: String , },
  description:{type:String, },
  image: {
    type: String,
    required:true
  },
});
module.exports = mongoose.model("CloudinaryImage", CloudinarySchema);
