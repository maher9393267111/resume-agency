import { error } from "console";
import { getUser } from "../../../src/lib/getUser";
import { prisma } from "../../../src/lib/prisma";

export default async function handler(req, res) {
  const session = await getUser(req, res);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  switch (req.method) {
    case "POST":
      // Create a category
      try {
        const newCategory = await prisma.project.create({
          data: {
            ...req.body,

            user: {
              connect: {
                id: session.id,
              },
            },
          },
        });

        const categories = await prisma.project.findMany({
          where: {
            userId: session.id,
          },

          orderBy: {
            createdAt: "desc",
          },
        });

        return res.status(201).json({ project: newCategory, cats: categories });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "GET":
      const { page, size } = req.query;
      // Get all category
      try {
        const categories = await prisma.project.findMany({
          where: {
            userId: session.id,
          },
          //   skip: +page * +size,
          //   take: +size,
          orderBy: {
            createdAt: "desc",
          },
        });

        const count = await prisma.project.count({
          where: {
            //  OR: [{ user_id: session.user.id }, { built_in: true }]

            userId: session.id,
          },
        });

        return res.status(200).json({ categories, count });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "PATCH":
      // Update a category
      const { userId, ...other } = req.body;

      if (!userId) return res.status(400).json({ message: "Missing category id" });

      try {
        const foundUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (!foundUser)
          return res.status(400).json({ message: error.message });

        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
            
          },
          data: {
            ...other,
          },
        });

     

        return res
          .status(200)
          .json({ category: updatedUser });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "DELETE":
      // Delete a transaction
      const { userid} = req.query;

      console.log("id", userid);
      if (!userid) return res.status(400).json({ message: "Missing  userId" });

      try {
        // const foundTransaction = await prisma.user.findUnique({
        //   where: { id: parseInt(userid) },
        // });

        // console.log("found", foundTransaction);

        // if (foundTransaction.userId !== session.id) {
        //   return res.status(401).json({ message: "Unauthorized" });
        // }

        const deletedTransaction = await prisma.user.delete({
          where: { id: parseInt(userid) },
        });

   
        return res
          .status(200)
          .json({ transaction: deletedTransaction  });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
