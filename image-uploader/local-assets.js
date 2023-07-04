require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
 /*
  './image-uploader/images/wood-stairs-crafting.gif',
  './image-uploader/images/tnt-crafting.png',
  './image-uploader/images/hay-bale-crafting.png',
  './image-uploader/images/carpet-crafting.gif',

  //Basic Recipes
  './image-uploader/images/wood-planks-crafting.gif',
  './image-uploader/images/chest-crafting.png',
  './image-uploader/images/crafting-table-crafting.png',
  './image-uploader/images/furnace-crafting.png',
  './image-uploader/images/torches-crafting.png',
  
  //Tool Recipe
  //'./image-uploader/images/axes-crafting.gif',
  './image-uploader/images/bucket-crafting.png',
  './image-uploader/images/carrot-on-a-stick-crafting.png',
  './image-uploader/images/clock-crafting.png',
  './image-uploader/images/compass-crafting.png',
  './image-uploader/images/fishing-rod-crafting.png',
  './image-uploader/images/flint-and-steel-crafting.png',
  './image-uploader/images/hoes-crafting.gif',
  './image-uploader/images/map-crafting.png',
  './image-uploader/images/pickaxes-crafting.gif',
  './image-uploader/images/shears-crafting.png',
  './image-uploader/images/shovels-crafting.gif',

  //Weapon Recipe
  './image-uploader/images/bow-crafting.png',
  './image-uploader/images/arrow-crafting.png',
  './image-uploader/images/damaged-shield-crafting.png',
  './image-uploader/images/patterned-shield-crafting.png',
  './image-uploader/images/shield-crafting.gif',
  './image-uploader/images/spectral-arrow-crafting.png',
  './image-uploader/images/swords-crafting.gif',
  './image-uploader/images/tipped-arrow-crafting.png',
 

  //Armor Recipe
  './image-uploader/images/boots-crafting.gif',
  './image-uploader/images/chestplates-crafting.gif',
  './image-uploader/images/helmets-crafting.gif',
  './image-uploader/images/leggins-crafting.gif',

  //Manufactured Recipe
  './image-uploader/images/andesite-crafting.png',
  './image-uploader/images/anvil-crafting.png',
  './image-uploader/images/beacon-crafting.png',
  './image-uploader/images/coal-block-crafting.png',
  './image-uploader/images/quartz-block-crafting.png',
  './image-uploader/images/redstone-block-crafting.png',
  './image-uploader/images/bone-block-crafting.png',
  './image-uploader/images/bookshelf-crafting.png',
  './image-uploader/images/brick-block-crafting.png',
  './image-uploader/images/chiseled-quartz-block-crafting.png',
  './image-uploader/images/chiseled-stone-brick-crafting.png',
  './image-uploader/images/chiseled-stone-brick-crafting.png',
  './image-uploader/images/clay-block-crafting.png',
  './image-uploader/images/coarse-dirt-crafting.png',
  './image-uploader/images/dark-prismarine-crafting.png',
  './image-uploader/images/diorite-crafting.png',
  './image-uploader/images/end-stone-bricks-crafting.png',
  './image-uploader/images/glowstone-crafting.png',
  './image-uploader/images/granite-crafting.png',
  './image-uploader/images/hay-bale-crafting.png',
  './image-uploader/images/jack-o-lantern-crafting.png',
  './image-uploader/images/magma-block-crafting.png',
  './image-uploader/images/moss-stone-crafting.png',
  './image-uploader/images/mossy-stone-brick-crafting.png',
  */

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
