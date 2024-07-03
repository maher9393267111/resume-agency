import nodemailer from "nodemailer";

const passw = "bbvh hors bgbq pxjm";
const email = "noreply.springworthbooks@gmail.com";



const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",

  secure: true, // use SSL
  auth: {
    // user: "itesa.getViral@gmail.com",
    // pass: "rtspkviskcrhorey",

    user: email, // generated ethereal user
    pass: passw, // generated ethereal password
  },
});

export default transporter
