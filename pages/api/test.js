import { error } from "console";
import { getUser } from "../../src/lib/getUser";
import { prisma } from "../../src/lib/prisma";



const url = 'https://api.wassenger.com/v1/messages';
let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Token: 'EAALcoF1MCZA8BO1LGKm3SrQAKE4Vbiz70DZBB8i4qSlBnZAEsZBjA4ZB02Y5Wpwf0qmqZBlFj81leHVrjAP3zHCxP0goK9cglnopI1uWnLCLZBEQAOoYzXLZBUTZAtyQPGk4cI7L3QRZBAkV5d2uZBZAA0i4nTQooxCTQI5Qt7wZCti7DfnqqT0rJsocc8lfhDkFl424TK7UVaLDvjttDKfZBTLxd9GAt0wX6IbAeOeFK1YrX1RV0UZCHCSQv1xojxOUwDxWQZDZD'
    },
    body: '',
};



export default async function handler(req, res) {
  const session = await getUser(req, res);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  switch (req.method) {
    case "POST":

    options = {
        ...options,
        body: JSON.stringify({
            group: '120363317334214495@g.us',
            message: `ha confirmado su asistencia el día "${new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}"`
        })
    }



      // Create a category
      try {

        const whatsappResponse = await fetch(url, options)

        return res.status(201).json({ slider: newSlider });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "GET":
      const { page, size } = req.query;
      // Get all category
      try {
        const sliders = await prisma.slider.findMany({
          where: {
            userId: session.id,
          },
          //   skip: +page * +size,
          //   take: +size,
          orderBy: {
            createdAt: "desc",
          },
        });

        const count = await prisma.slider.count({
          where: {
            //  OR: [{ user_id: session.user.id }, { built_in: true }]

            userId: session.id,
          },
        });

        return res.status(200).json({ sliders, count });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "PATCH":
      // Update a category
      const { id, ...other } = req.body;

      if (!id) return res.status(400).json({ message: "Missing slider id" });

      try {
        const foundSlider = await prisma.slider.findUnique({
          where: { id: id },
        });

        if (!foundSlider)
          return res.status(400).json({ message: error.message });

        const updatedSlider = await prisma.slider.update({
          where: {
            id: id,
            userId: session.id,
          },
          data: {
            ...other,
          },
        });

     

        return res
          .status(200)
          .json({ slider: updatedSlider });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "DELETE":
      // Delete a transaction
      const { sliderId } = req.query;

      console.log("id", sliderId);
      if (!sliderId) return res.status(400).json({ message: "Missing  id" });

      try {
        const foundTransaction = await prisma.slider.findUnique({
          where: { id: parseInt(sliderId) },
        });

        console.log("found", foundTransaction);

        if (foundTransaction.userId !== session.id) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const deletedTransaction = await prisma.slider.delete({
          where: { id: parseInt(sliderId) },
        });

   
        return res
          .status(200)
          .json({ slider: deletedTransaction  });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
