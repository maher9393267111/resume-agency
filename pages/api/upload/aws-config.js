import { S3Client } from "@aws-sdk/client-s3";
const endpoint ="https://nyc3.digitaloceanspaces.com"

const s3Client = new S3Client({
    endpoint: endpoint,
    region:"us-east-1",
    credentials: {
      
        accessKeyId:   process.env.AWS_ACCESS_KEY,
        //"DO00TUAXQ8J6BUZQ3CDR",
       
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        // "MMHM398QV03sHeRO9FZcyc6ImN1pbMX8MpJhnRNfmeE"
       
    },

    //  process.env.AWS_BUCKET_REGION,
})

export default s3Client;



