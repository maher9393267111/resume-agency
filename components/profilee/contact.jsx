import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ImageEndpoint } from "../../src/lib/globall";
import { errorHandler ,successHandler } from "../../src/lib/errorHandler";

export default function Contact({bgImage,portfoliemail ,about, domainUrl,mainTextColor , contactBtnTextColor , contactBTnBgColor ,coverbg ,contactInputBorderColor }) {
  // const domainUrl = "http://localhost:3000";


    
  const router = useRouter()

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  
  
  
  const sendMessage = async (data) => {
      try {
      //  setIsLoading(true);
    
        const res = await fetch(`/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
  
          body: JSON.stringify({
            title: "contact",
            name: name,
            email: email,
            message:message,
            
             phone: number,
             portfoliemail:portfoliemail
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
        setNumber("")
      //   setPhone("")
        
      } catch (error) {
      //  setIsLoading(false);
        errorHandler(error?.message)
        console.log(error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('name'  ,name ,"email" , email  ,"mesage",  message ,"phone" ,number)
      if (name && email && message && number) {
        sendMessage({
          name,
          email,
          
          message,
          number
        });
      } else {
        errorHandler("All fields is requeired")
      }
    };
  
  







  return (
   
    <div className={`${coverbg} relative -mt-[62px] bg-blac pb-12`}>

{/* without BACKGROUND 🐦  🐦  🐦 */}



{!bgImage ?


     <div className={` relative `}>



        <p className={` ${mainTextColor} text-whit text-2xl md:text-3xl py-8 text-center underline `}>
          השאירו פרטים ונחזור אליכם:
        </p>

        <div className="   w-[90%] mx-auto ">
          <form onSubmit={handleSubmit}  action="">
            <div className=" justify-center flex-col md:flex-row flex gap-4">
              <div className="w-full md:w-1/2">
                <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/2">
                <input
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                  type="email"
                />
              </div>
            </div>

            <div className="w-full my-4">
              <input
                     type="tel"
                     required
                     id="number"
                     
                     value={number}
     
                     onChange={(e) => setNumber(e.target.value)}
                placeholder="phone"
                className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                // type="text"
              />
            </div>

            <div className="w-full my-4">
              <textarea
                   
                   name="message"
                   required
                  
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                rows="4"
                cols="50"
                className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                type="text"
              />
            </div>

    

            <div className="w-full">
            <button type='submit' className={`${ contactBTnBgColor} ${contactBtnTextColor} w-full mainBgColor text-whit font-bold text-center text-xl rounded-sm  py-3 px-6`}>
                  Submit
                </button>
            </div>
          </form>

      

          <div className="text-center my-8">
            <div className={`${mainTextColor}  text-whit font-semibold text-lg`}>
              <p>שתפו את כרטיס הביקור שלנו עם חברים:</p>
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
        </div>

 




      </div> 





:




      <div className={`  relative min-h-scree -mt-16`}>
        <img
          src={`${ImageEndpoint}/${bgImage}`}
          // "https://sample-store-nu.vercel.app/hero.jpg"
          alt="Hero"
          className="object-cover object-center    !w-full md:!h-[110vh] lg:!h-[100vh] xl:!h-[80vh] !h-[77vh]"
        />


        <div className={`${coverbg}  absolute inset-0 coverb opacity-30`}></div>
        <div className={` absolute inset-0 `}>
          <p className={`${mainTextColor} text-whit text-2xl md:text-3xl py-8 text-center underline `}>
            השאירו פרטים ונחזור אליכם:
          </p>
          <div className=" relative  w-[95%] mx-auto ">
          <form onSubmit={handleSubmit}  action="">
            <div className=" justify-center flex-col md:flex-row flex gap-4">
              <div className="w-full md:w-1/2">
                <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/2">
                <input
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                  type="email"
                />
              </div>
            </div>

            <div className="w-full my-4">
              <input
                     type="tel"
                     required
                     id="number"
                     
                     value={number}
     
                     onChange={(e) => setNumber(e.target.value)}
                placeholder="phone"
                className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                // type="text"
              />
            </div>

            <div className="w-full my-4">
              <textarea
                   
                   name="message"
                   required
                  
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                rows="4"
                cols="50"
                className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
                type="text"
              />
            </div>

    

            <div className="w-full">
            <button type='submit' className={`${ contactBTnBgColor} ${contactBtnTextColor} w-full mainBgColor text-whit font-bold text-center text-xl rounded-sm  py-3 px-6`}>
                  Submit
                </button>
            </div>
          </form>




            <div className="text-center mb-4 mt-10">
              <div className="text-white font-semibold text-lg">
                <p>שתפו את כרטיס הביקור שלנו עם חברים:</p>
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://react-icons.github.io/react-icons/search/#q=arrow`}
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
          </div>
        </div>
      </div>


}

    </div>
  );
}
