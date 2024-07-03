// import { Resend } from 'resend'

// import EmailTemplate from '../../components/profile/emailSend'

// const resend = new Resend(
//   "re_GLvoQWW8_7WRkL7XoebQT24dTe29GFTnk"
// //  "re_gbgr1EEM_AKGZemLqHoEk16qy22piCe1r"

// //   're_Bk3zRAbt_2Qw8yAT3UNB1EQKgpVPzE1WD'
//   );

// export default async function sendEmail(req, res) {
//   try {
//     const data = req.body

//     console.log('data', data)

//  const dataRes =   await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to:'gomemahero@gmail.com',

//     //  to:'kristalturkey@gmail.com',
//       replyTo: data.email,
//       subject: `${data.name} `,
//       react: <EmailTemplate {...data} />,
//     })

//     console.log('dataRes', dataRes)
//     res.status(200).json({ message: 'Email sent' })
//   } catch (e) {
//     res.status(500).json({ message: e.message })
//   }
// }

const passw = "bbvh hors bgbq pxjm";
const email = "noreply.springworthbooks@gmail.com";

import nodemailer from "nodemailer";

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

async function sendEmail({ name, email, phone, message, portfoliemail }) {
  const emailOptions = {
    form: `${name}`,
    to: portfoliemail,
    subject: `Contact Message from ${email}`,
    html: `<h2>Email sent from a  ${name}
    
    </br>

    <h1>${phone}</h1>

    <h1>${message}</h1>

    
    </h2>`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("DATA-,", req.body);
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: "Error sending email" });
  }

  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
