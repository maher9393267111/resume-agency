import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const endpoint = "https://nyc3.digitaloceanspaces.com";



export const putObject = async (key, body, contentType) => {
  const s3 = new S3Client({
    endpoint: endpoint,
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,

        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  // workaround for the issue: https://github.com/aws/aws-sdk-js-v3/issues/1800
  s3.middlewareStack.add(
    (next, context) => (args) => {
      delete args.request.headers["content-type"];
      return next(args);
    },
    {
      step: "build",
    }
  );
  

  const objectParams = {
    ACL: "public-read",
    Bucket: "dash93",
    Key:`test/${key}`,
    Body: body,
    ContentType: contentType,
  };

  const results = await s3.send(new PutObjectCommand(objectParams));
  return results;
};
