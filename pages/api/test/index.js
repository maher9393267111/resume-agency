import fs from "fs";
import formidable from "formidable";
import { putObject } from "./utils";

const parseFormData = (req) => {
  return new Promise((resolve, reject) => {
    // const form = new formidable.IncomingForm({
    //   multiples: true,
    //   keepExtensions: true,
    // });

    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      console.log("fielessss" ,files)
      resolve({ fields, files });
    });
  });
};

async function handler(req, res) {
  if (req.method === "POST") {
    const { files } = await parseFormData(req);

    console.log("FILE❇❇❇❇❤️❤️❤️❇S" , files.image[0].filepath)


    const image = files.image[0];

    const key = image.originalFilename;
    const body = fs.readFileSync(image.filepath);
    const contentType = image.mimetype;

    const results = await putObject(key, body, contentType);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
