const ImageSchema = require("../models/ImageSchema");
const cloudinary = require('../config/Cloudinary');
const { db } = require("../models/ImageSchema");
const { MongoClient } = require("mongodb");
const CloudinarySchema = require("../models/CloudinarySchema");

const addImageCloud = async (req, res) => {
  const { image } = req.body
  console.log({ image })


  const uploadedImage = await cloudinary.uploader.upload(image,
    {
      upload_preset: 'unsigned_upload',
      // public_id:`${title}avatar`,

      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
    },
    function (error, result) {
      if (error) {
        console.log('line 32', error)
        return res.status(400).json(error)

      }
      console.log('line34', result)
      return res.status(200).json(result)
    });


  try {
    const newImage = new CloudinarySchema({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,

    });
    await newImage.save();
    console.log('good1', newImage)
    console.log('good', uploadedImage)
    return res.status(200).json({
      success: true,
      message: "image saved successfuly",
      data: uploadedImage, newImage
    });

  } catch {

  }

};

const getAllImagesCloud = async (req, res) => {
  try {

    const image = await CloudinarySchema.find()
    return res.status(200).json({
      success: true,
      message: "there is your all images: ",
      data: image,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });

  }
}
module.exports = {
  addImageCloud,
  // getImage,
  getAllImagesCloud
  // deleteImage,
  // updateImage,
};
