import { prisma } from "../../../../src/lib/prisma";

import crypto from "crypto";
import bcrypt from "bcrypt";
import findUser from "../findUser";

export default async function handler(req, res) {
  //endpoint para cambiar solo la contrasena
  const { id } = req.query;
  let { password } = req.body;
  console.log("ID" ,id , password)
  if (req.method === "PUT") {
    try {
     // const encoder = new TextEncoder();
    //  const data = encoder.encode(password);
    //   password = crypto.createHash("sha256").update(data).digest("hex");

 //  await findUser(id);


    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("HASHED---->" , hashedPassword)
      console.log("CRYPTO PASSWORD" , password)
      const user = await prisma.user.update({
        where: {
          email: id,
        },
        data: {
          password:hashedPassword,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

