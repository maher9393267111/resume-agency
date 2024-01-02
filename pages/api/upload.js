// import { prisma } from "../../src/lib/prisma";
// import { getUser } from "../../src/lib/getUser";
// import multer from "multer";
// import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
// import s3Client from "./upload/aws-config";
// import sharp from "sharp";
// import crypto from "crypto";

// import nc from "next-connect";

// const handler = nc();

// const cdnEndpoint = "https://dash93.nyc3.cdn.digitaloceanspaces.com";

// const upload = multer({
//   storage: multer.memoryStorage(),
//   dest: "uploads/",
// });






// handler.post(
  
//   upload.single("image"),
//   async (req, res, next) => {
//     try {
//       const user = await getUser(req, res);
//       if (!user) {
//         res.status(500).json("No user Founded");
//       }

//       console.log("TYPE", "or", req.query.type, req.query);
//       const type = req.query.type;
//       // collection = req.query.collection
//       const oldfile = req.query.oldfile;

  

//       const file = req.file;

//       // Delete Old file before Upload new file

//       if (req.file && oldfile !== "") {
//         const deleteParams = {
//           Bucket: process.env.AWS_BUCKET_NAME,
//           Key: oldfile,
//         };
//         await s3Client.send(new DeleteObjectCommand(deleteParams));
//       }

//       console.log("file");
//       const fileBuffer = await sharp(file.buffer)
//         .resize({ height: 500, width: 500, fit: "cover" })
//         .toBuffer();

//       const fileName = crypto.randomBytes(32).toString("hex");
//       const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Body: fileBuffer,
//         Key: fileName,
//         ContentType: file.mimetype,
//         ACL: "public-read",
//       };

//       const newURL = `${cdnEndpoint}/${fileName}`;

//       var result = await s3Client.send(new PutObjectCommand(params));

//       return res.status(201).json({ fileName: fileName, imageUrl: newURL });
//     } catch (err) {
//       res.status(500).json(err.message);
//     }
//   }
// );


// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default handler;









    // if (!req.file) return res.status(400).json({ error: "File is missing" });
      //  if (!req.file.mimetype.startsWith("image/"))
      // return res.status(415).json({ error: "File is not an image" });


// await prisma.user.update({
//   where: { id: user.id},
//   data: { image: newURL },
// });

//{ fileName: fileName ,imageUrl:`${cdnEndpoint}/${fileName}` }


// ---------------------------


import multer, { MulterError } from "multer";


import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";


import { getUser } from "../../src/lib/getUser";
import nc from "next-connect";
 import sharp from "sharp";
 import crypto from "crypto";

 const handler = nc();



const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 5 },
});




const endpoint ="https://nyc3.digitaloceanspaces.com"


const s3 = new S3Client({
    endpoint: endpoint,
    region:"us-east-1",
    credentials: {
      
        accessKeyId:   process.env.AWS_ACCESS_KEY,
       
       
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  
       
    },

    
})



handler.post(
  // @ts-ignore
  upload.single("image"),
  async (req, res, next) => {
    const session = await getUser(req, res);

    if (!session )
      return res.status(401).json({ error: "You must be logged in" });

    await next();
  },
  (req, res, next) => {
    if (!req.file) return res.status(400).json({ error: "File is missing" });

    // if (!req.file.size) return res.status(400).json({ error: "File is empty" });

    // if (!req.file.mimetype.startsWith("image/"))
    //   return res.status(415).json({ error: "File is not an image" });

    return next();
  },
  async (req, res) => {
    const fileName = crypto.randomBytes(32).toString("hex");
    await s3.send(
      new PutObjectCommand({
        Bucket: "dash93",
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        
                 ACL: "public-read",
      })
    );


      //  collection = req.query.collection
       const oldfile = req.query.oldfile;


   // const session = await getServerAuthSession({ req, res });
    //const oldURL = session.user.image;
    //onst oldKey = oldURL.substring(oldURL.lastIndexOf("/") + 1);

    //const newURL = `${env.NEXT_PUBLIC_BUCKET_URL}/${key}`;
  
    if (oldfile){

    await s3.send(
      new DeleteObjectCommand({
        Bucket: "dash93",
        Key: oldfile,
      })
    );
    }




    res.status(201).send({fileName:fileName});
  }
);

// export default handler({
//   onError: (error, _req, res) => {
//     if (error instanceof MulterError) {
//       if (error.message === "Unexpected end of form")
//         return res.status(400).json({ error: "File is missing" });

//       if (error.message === "File too large")
//         return res.status(413).json({ error: "File is too large" });
//     }
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   },
//   onNoMatch: (_req, res) => {
//     res.status(405).json({ error: `Method Not Allowed` });
//   },
// });


 export default handler;



export const config = {
  api: {
    bodyParser: false,
  },
};