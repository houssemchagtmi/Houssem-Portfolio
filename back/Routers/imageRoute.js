const express = require("express");
const { addImage, getImage, updateImage, deleteImage, getAllImages } = require("../controler/ProjectMulterControler");
const { addImageCloud, getAllImagesCloud } = require("../controler/ProjectCloudinaryController");
const cloudinary = require('../config/Cloudinary')

// const { uploadedImage } = require("../Middelware/cloudinaryMiddl");
const { upload } = require("../Middelware/ImageMiddl");
const ImageSchema = require("../models/ImageSchema");
const router = express.Router();

router.post("/upload", upload, addImage);
router.post('/uploadcloudinary',upload ,addImageCloud)
// router.get("/:id",getImage );
router.get("/", getAllImages);
router.get("/getcloudinary",getAllImagesCloud)
// router.put("/put/:id", updateImage);
// router.delete("/del/:id", deleteImage);
module.exports = router;
