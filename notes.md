prisma

npm run update ----> THENNN  npx prisma generate  
npx prisma migrate dev  ---> {update prisma schema} ---> then terminate terminal down and run
--> { npm run generate} : {npx prisma generate}  for client schema side

mainColor = #00AB55

---------

export default async (req, res) => {
//   let { name, email, password } = req.body;

//   if (req.method === "POST") {
//     name = name.trim();
//     email = email.trim();

//     if (!name.length)
//       return res.status(422).json({ message: "Enter your name!" });

//     if (!EMAIL_REGEX.test(email))
//       return res.status(422).json({ message: "Invalid email!" });

//     if (password.length < 6 || password.length > 32)
//       return res
//         .status(422)
//         .json({ message: "Password be 6 - 32 characters long!" });





//     const userExist = await prisma.user.findUnique({ where: { email } });

//     if (userExist)
//       return res.status(422).json({ message: "Email already in use!" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     });

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     setCookie("token", token, {
//       req,
//       res,
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//       path: "/",
//     });

//     res.status(201).json(user);
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// };