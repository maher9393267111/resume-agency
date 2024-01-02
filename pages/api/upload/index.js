import {prisma} from '../../../src/lib/prisma'
import { getUser } from '../../../src/lib/getUser';
 import multer from "multer";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "./aws-config";
import sharp from 'sharp';
import crypto from 'crypto'

import  nc from 'next-connect'

const handler = nc();

const cdnEndpoint ="https://dash93.nyc3.cdn.digitaloceanspaces.com"

const upload = multer({
  storage: multer.memoryStorage(),
  dest: "uploads/",
});



handler.post(
    // @ts-ignore
    upload.single("image"),
    async (req, res, next) => {

try {

       const user =await getUser(req, res);
     if (!user) {

         res.status(500).json("No user Founded");
     }




    if (!req.file) return res.status(400).json({ error: "File is missing" });
  //  if (!req.file.mimetype.startsWith("image/"))
   // return res.status(415).json({ error: "File is not an image" });


   const file =req.file
   
    console.log("file")
    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 500, width: 500, fit: "cover" })
      .toBuffer();
  
    const fileName = crypto.randomBytes(32).toString('hex');
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: fileBuffer,
      Key: fileName,
      ContentType: file.mimetype ,
      ACL: 'public-read'
    }
  
      var result = await s3Client.send(new PutObjectCommand(params));
      return res.status(201).json({ fileName: fileName ,imageUrl:`${cdnEndpoint}/${fileName}` });






  //   res.status(200).json(req.file);



}

catch(err){

    res.status(500).json(err.message)
}




    })



    export default handler




// const handler = async (req, res) => {
// //   const { user } = req;




// try {

//     // const user =await getUser()

//     // if (!user) {

//     //     res.status(500).json("No user Founded");
//     // }



//     const file = req.file;
  
//     console.log("file")
//     const fileBuffer = await sharp(req.file.buffer)
//       .resize({ height: 500, width: 500, fit: "cover" })
//       .toBuffer();
  
//     const fileName = crypto.randomBytes(32).toString('hex');
//     const params = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Body: fileBuffer,
//       Key: fileName,
//       ContentType: file.mimetype ,
//       ACL: 'public-read'
//     }
  
//       var result = await s3Client.send(new PutObjectCommand(params));
//       return res.status(201).json({ fileName: fileName ,imageUrl:`${cdnEndpoint}/${fileName}` });
  
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ message: err?.message });
//     }




// };



// const middleware = (req, res) => {
//     return new Promise((resolve, reject) => {
//       upload.single("image")(req, res, (err) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: "Error uploading file" });
//         }
//         resolve();
//       });
//     })
    
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//       });
//   };


//   const ProfileImageUploader = (req, res) => {
//     middleware(req, res);
//   };

// export default ProfileImageUploader;





export const config = {
  api: {
    bodyParser: false,
  },
};
