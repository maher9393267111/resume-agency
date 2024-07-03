import transporter from "./nodemailer";
import findUser from "./findUser";

const domainDev = "http://localhost:3000/"
const domanProduction = "https://www.ultratech.top"


export default async function resetPassword(req, res) {
  const { method } = req;
  if (method == "POST") {
    const { email } = req.body;
    try {
      await findUser(email);

      console.log("USER IS ???" , email)
      await transporter.verify();
      const mail = {
        from: "ultratech@gmail.com",
        to: email,
        subject: "Reset password Ultratech",
        html: 
        `<div style="background-color: #f1f1f1; padding: 2rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; " dir="auto">
  <div style="margin: auto;">
    <h1 style="color: #29221f">  طلب إعادة تعيين كلمة المرور</h1>
    <div style="margin-bottom: 2rem">
      <p style="font-size: large; margin-bottom: 4rem; color: #81322a;">
        لقد تلقيت هذا البريد الإلكتروني لأننا تلقينا طلبًا لإعادة تعيين كلمة المرور لحسابك.
      </p>
        <div style="margin-bottom: 4rem; margin-top: 4rem !important;">
            <a
                style="
                margin-bottom: 4rem;
                text-decoration: none;
                padding: 0.75rem 1.2rem;
                background: #29221f;
                color: #dad7ce;
                cursor: pointer;
                border: 1px solid #29221f;
                border-radius: 0.4rem;
                "
               href=${
             domainDev
           }/reset/${encodeURIComponent(
          email
         )}
                target="_blank"
                >إعادة تعيين كلمة المرور
            </a>
        </div>
      <a
        style="
          color: #a38579;
          cursor: pointer;
        "
        href="https://www.ultratech.top"
        target="_blank"
        >العودة إلى الموقع
      </a>
    </div>
    <div style="margin-bottom: 2rem">
      <div style="margin-top: 2rem">
        <b>اتمنى لك يوم جيد !</b>
      </div>
      <small style="color: #a38579">Ultratech</small>
    </div>
  </div>
</div>`
        // `
        // <p style="color: black">
        //   Estimado usuario, <br>
        //   Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en ToolMatch. 
        //   Entendemos lo importante que es acceder a tu cuenta, por lo que estamos aquí para ayudarte a recuperar el acceso. <br>
        //   Para restablecer tu contraseña, ingresa al link proporcionado por el siguiente botón:
        // </p>
        // <button style="border: 5px, black, solid; border-radius: 20px; background: white; color: black">
        //   <a href=${
        //     domainDev
        //   }/reset/${encodeURIComponent(
        //   email
        // )} style="text-decoration: none; color: black">
        //     Recuperar contraseña
        //   </a>   
        // </button>
        // <p style="color: black">
        //   Si sigues experimentando problemas para acceder a tu cuenta o tienes alguna otra pregunta, no dudes en contactar a nuestro equipo de soporte. 
        //   Estamos aquí para asistirte y asegurarnos de que puedas acceder a tu cuenta de manera segura. <br>
        //   Agradecemos tu comprensión y cooperación en este asunto. 
        //   Valoramos tu confianza y nos comprometemos a brindarte un entorno seguro y protegido.
        // </p>
        // <h4 style="color: black">
        //   Atentamente, el equipo de ToolMatch
        // </h4>
        // `,



      };
      await transporter.sendMail(mail);
      res.status(200).json({
        Message: `Se ha enviado un correo electrónico a ${email} para restablecer su contraseña`,
      });
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  }
}
