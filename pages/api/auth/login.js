

import { prisma } from "../../../src/lib/prisma";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import bcrypt from "bcrypt";
import nc from 'next-connect'
const handler = nc()

const EMAIL_REGEX = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");


handler.post(async (req, res) => {

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(422).json({ message: "Wrong email!" });
    const rightPassword = await bcrypt.compare(password, user.password);
    if (!rightPassword)
      return res.status(422).json({ message: "Wrong password!" });







    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    setCookie("token", token, {
      req,
      res,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    res.status(200).json(user);
  } 
  
 



 
)









export default handler
















// import jwt from "jsonwebtoken";
// import { setCookie } from "cookies-next";
// import bcrypt from "bcrypt";
// import { prisma } from "../../../src/lib/prisma";

// export default async (req, res) => {
//   const { email, password } = req.body;

//   if (req.method === "POST") {
//     const user = await prisma.user.findUnique({ where: { email } });

//     if (!user) return res.status(422).json({ message: "Wrong email!" });
//     const rightPassword = await bcrypt.compare(password, user.password);
//     if (!rightPassword)
//       return res.status(422).json({ message: "Wrong password!" });







//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     setCookie("token", token, {
//       req,
//       res,
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//       path: "/",
//     });

//     res.status(200).json(user);
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// };
