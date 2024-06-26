import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    // file was uploaded in cloudinary
    console.log(
      'the file is successfully uploaded in cloudinary',
      response.url
    );
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temprory saved file as the upload  operation got failed

    return null;
  }
};

export { uploadOnCloudinary };
