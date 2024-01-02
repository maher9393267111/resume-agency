import { prisma } from "../../../src/lib/prisma";
import jwt from "jsonwebtoken";
import { getUser } from "../../../src/lib/getUser";
import nc from "next-connect";
const handler = nc();

handler.post(async (req, res) => {
  const user = await getUser(req, res);

  if (!user) res.status(422).json({ message: "No Token" });

  console.log(user.id, "user");
  const {
    desc,
    //image
    // ,
    instagram,
    pdf,
    telgram,
    title,
    twitter,
    whatsapp,
    myImage,
    headImage,
    facebook,
    link
  } = req.body;

  console.log(req.body, "Body");

  const userAbout = await prisma.about.findFirst({
    where: { userId: user.id },
    include: { user: true },
  });
  // if not exist create  about section
  if (!userAbout) {
    console.log("create");
    const about = await prisma.about.create({
      data: {
        
        desc,
        
        instagram,
        pdf,
        telgram,
        title,
        twitter,
        whatsapp,
        facebook,
        myImage,
        headImage,
        link,

        //   answers: {
        //     create: answers,
        //   },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    res.status(201).json(about);
  }

  // if exist create New about sectio
  else {
    console.log("Update");

    //   });
    const about = await prisma.about.update({
      where: {
        //  userId: parseInt(user.id)
        id: userAbout.id,
      },
      data: {
        desc,
        facebook,
    instagram,
    pdf,
    telgram,
    title,
    twitter,
    whatsapp,
    myImage,
    headImage,
    link
      },
    });

    res.status(201).json(about);
  }
});

export default handler;
