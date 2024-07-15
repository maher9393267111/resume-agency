import { Formik } from 'formik';
import React from 'react';

const ContactForm = ({domainUrl ,textColor ,bgColor ,btnColor}) => {
  
  const formData = {
    "formspreeURL": "https://formspree.io/f/your_api_key"
  }
  


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendMessage = async (data ) => {
    try {
      //  setIsLoading(true);

      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          title: "contact",
          name: name,
          email: email,
          message: message,

          phone: number,
          portfoliemail: portfoliemail,
        }),
      });

      console.log("response", res?.status);

      if (res.status === 200) {
        successHandler("message sended successfully");
      }

      //  setIsLoading(false);
      setName("");
      setEmail("");
      //   setSubject("");
      setMessage("");
      setNumber("");
      //   setPhone("")
    } catch (error) {
      //  setIsLoading(false);
      errorHandler(error?.message);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name",
      name,
      "email",
      email,
      "mesage",
      message,
      "phone",
      number
    );
    if (name && email && message && number) {
      sendMessage({
        name,
        email,

        message,
        number,
      });
    } else {
      errorHandler("All fields is requeired");
    }
  };

  




  return (
    <div className="content contacts">
      {/* title */}
      <div className="title text-center">Contact Form</div>
      {/* content */}
      <div className="row container">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div dir='' className="contact_form">
   
            <form dir='rtl'  onSubmit={handleSubmit} id="contactForm" action={formData.formspreeURL}>
              <div dir='' className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input 
                        type="text" 
                            placeholder="שם פרטי"
                        name="name" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>

            
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input 
                        type="email" 
          placeholder="דואר אלקטרוני"
                    
                        name="email"
                        required="required"
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <input 
                        type="number" 
          placeholder=" נייד"
               
                        name="number"
                        required="required"
                        
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>



                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
        placeholder="הודעה"

                        name="message" 
                        required="required"
                        
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <button type="submit" className="button">
                  <span className= {`text text-2xl  px-4 py-2  ${textColor} font-semibold font-serif`}>  לִשְׁלוֹחַ</span>
                  {/* <span className="arrow" /> */}
                </button>
              </div>
            </form>
            
           

            <div className="alert-success " id="contactFormStatus" />
          </div>
        </div>


        <div className="text-center my-8">
              <div
                className={`black  text-whit font-semibold text-lg`}
              >
                <p
                
                     style={{
                      color:`black`
                    }}
                
                dir="rtl" className={`${textColor} font-serif `}>שתפו את כרטיס הביקור שלנו עם חברים:</p>
              </div>

              <div className="flex gap-2 justify-center mt-3 ">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    "Hello"
                  )}%20${encodeURIComponent(domainUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_whatsapp-256.png"
                    alt=""
                  />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${domainUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/facebook-256.png"
                    alt=""
                  />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=share&url=${domainUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"
                    alt=""
                  />
                </a>

                <a
                  href={`mailto:?subject=sahre&body=Share your website: ${domainUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://cdn3.iconfinder.com/data/icons/social-network-flat-3/100/Google_Mail-256.png"
                    alt=""
                  />
                </a>

                <a
                  href={`mailto:?subject=sahre&body=Share your website: ${domainUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/mobile.sms.communication-256.png"
                    alt=""
                  />
                </a>
              </div>
            </div>


        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
