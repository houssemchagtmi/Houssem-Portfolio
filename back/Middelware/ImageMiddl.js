const multer = require("multer");
const path = require ('path')

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
cb(null,'../front/public/uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  },
//  filename:(req,file,cb)=>{
  // console.log(file,req.body)

//   return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//  }
});
 const upload = multer({ storage: storage }).single("image");
module.exports={upload,}

