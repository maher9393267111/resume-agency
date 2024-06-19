import { S3Client } from "@aws-sdk/client-s3";
const endpoint = "https://nyc3.digitaloceanspaces.com";

const s3Client = new S3Client({
  endpoint: endpoint,
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,

    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default s3Client;
