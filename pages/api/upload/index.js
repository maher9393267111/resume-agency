import { prisma } from "../../../src/lib/prisma";
import { getUser } from "../../../src/lib/getUser";
import multer from "multer";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "./aws-config";
import sharp from "sharp";
import crypto from "crypto";

import nc from "next-connect";

const handler = nc();

const cdnEndpoint = "https://dash93.nyc3.cdn.digitaloceanspaces.com";

const upload = multer({
  storage: multer.memoryStorage(),
  dest: "uploads/",
});

handler.post(
  // @ts-ignore
  upload.single("image"),
  async (req, res, next) => {
    try {
      const user = await getUser(req, res);
      if (!user) {
        res.status(500).json("No user Founded");
      }

      console.log("TYPE", "or", req.query.type, req.query);
      const type = req.query.type;
      // collection = req.query.collection
      const oldfile = req.query.oldfile;

      // if (!req.file) return res.status(400).json({ error: "File is missing" });
      //  if (!req.file.mimetype.startsWith("image/"))
      // return res.status(415).json({ error: "File is not an image" });

      const file = req.file;

      // Delete Old file before Upload new file
      if (req.file && oldfile !== "") {
        const deleteParams = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: oldfile,
        };
        await s3Client.send(new DeleteObjectCommand(deleteParams));
      }

      console.log("file");
      const fileBuffer = await sharp(file.buffer)
        .resize({ height: 500, width: 500, fit: "cover" })
        .toBuffer();

      const fileName = crypto.randomBytes(32).toString("hex");
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: fileBuffer,
        Key: fileName,
        ContentType: file.mimetype,
        ACL: "public-read",
      };

      const newURL = `${cdnEndpoint}/${fileName}`;

      // await prisma.user.update({
      //   where: { id: user.id},
      //   data: { image: newURL },
      // });

      //{ fileName: fileName ,imageUrl:`${cdnEndpoint}/${fileName}` }

      var result = await s3Client.send(new PutObjectCommand(params));
      return res.status(201).json({ fileName: fileName, imageUrl: newURL });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
);


export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
