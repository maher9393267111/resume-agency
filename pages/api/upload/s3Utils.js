import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "./aws-config";

export async function getTemporaryImageUrl(bucket, key, expiresIn) {
  const getObjectParams = {
    Bucket: bucket,
    Key: key,
  };

  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3Client, command, { expiresIn });
  return url;
}
