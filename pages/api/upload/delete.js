import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "./aws-config";

import { getUser } from "../../../src/lib/getUser";

const handler = async (req, res) => {
  const user = getUser(req, res);

  try {
    const { link } = req.body;

    console.log("Link-->", link);

    if (!user) {
      return res.status(400).json({ message: "Cannot find a user " });
    }

    if (!link) {
      return res.status(400).json({ message: "No image to delete" });
    }

    if (link) {
      const deleteParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: link,
      };
      await s3Client.send(new DeleteObjectCommand(deleteParams));

      res.json({ message: "Slider Image Deleted Successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
