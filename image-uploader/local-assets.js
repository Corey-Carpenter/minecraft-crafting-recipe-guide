require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
  './image-uploader/images/axes-crafting.gif',
  './image-uploader/images/wood-stairs-crafting.gif'
];

(async function run() {
  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(image);
      console.log("Uploaded Image Successful", result.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
})();
