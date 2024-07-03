import { prisma } from "../../../src/lib/prisma";

export default async function findUser(email) {
  if (Array.isArray(email)) {
    for (let i = 0; i < email.length; i++) {
      const user = await findUserDb(email[i]);
      if (!user) {
        throw new Error("User not exist");
      }
    }
  } else {
    const user = await findUserDb(email);
    if (!user) {
      throw new Error("User not exist");
    }
  }
}

async function findUserDb(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}
