import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { errorHandler ,successHandler } from "../../src/lib/errorHandler";
export default function ContactForm({color ,user ,textColor ,iconColor ,portfoliemail ,about}) {

    
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
    <div>

<div className="grid w-full grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="w-full mt-6">
            <div className="flex flex-col md:mr-16">
              <label
                htmlFor="name"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-deep"
              >
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                style={{borderColor:`${iconColor}`,}}
                className={`flex items-center w-full h-10 pl-3 text-sm font-normal bg-whit borde  shadow-xl rounded-md  text-deep focus:outline-non  focus:border-none  focus:ring-[${iconColor}] placeholder-black text-black `}
                placeholder="Full Name  "
              />
            </div>
            <div className="flex flex-col mt-4 md:mr-16">
              <label
               style={{color:textColor }}
                htmlFor="email"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-deep"
              >
                Email
              </label>
              <input
              
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                style={{borderColor:`${iconColor}`,}}
                className={`flex items-center w-full h-10 pl-3 text-sm font-normal bg-whit borde  shadow-xl rounded-md  text-deep focus:outline-non  focus:border-none  focus:ring-[${iconColor}] placeholder-black text-black `}
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col mt-4 md:mr-16">
              <label
   style={{color:textColor }}
                htmlFor="number"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-deep"
              >
                Contact Number
              </label>
              <input
                type="tel"
                required
                id="number"
                
                value={number}

                onChange={(e) => setNumber(e.target.value)}
                style={{borderColor:`${iconColor}`,}}
                className={`flex items-center w-full h-10 pl-3 text-sm font-normal bg-whit borde  shadow-xl rounded-md  text-deep focus:outline-non  focus:border-none  focus:ring-[${iconColor}] placeholder-black text-black `}
                placeholder="Contact Number"
              />
            </div>

            <div className="flex flex-col mt-4 md:mr-16">
              <label
                htmlFor="message"
                className="pb-2 text-sm font-bold text-deep"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
               
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{borderColor:`${iconColor}`,}}
                className={`flex items-center w-full h-10 pl-3 text-sm font-normal bg-whit borde  shadow-xl rounded-md  text-deep focus:outline-non  focus:border-none  focus:ring-[${iconColor}] placeholder-black text-black `}
                placeholder="Message"
                rows={5}
              />
            </div>

            <button

style={{color:textColor ,backgroundColor:iconColor}}
              type="submit"
              className="  px-16 py-3 mt-4 text-lg font-medium uppercase rounded-xl shadow-lg cursor-pointer "
            >
              Submit
            </button>
          </form>

          <div
             style={{color:textColor }}
          
          className="flex items-center">
            <div className="flex flex-col items-center w-full space-y-2">
              <p className="text-md md:text-2xl text-deep font-georgia">Head Office</p>
              <span className="flex text-sm text-deep">
                <p className="font-bold ">Address:</p>
                <p className="px-2">
                  {about?.location}
                  {/* 79 Burman Road, Deal Party, Port Elizabeth, Eastern Cape, 6012 */}
                </p>
              </span>
              <span className="flex text-sm text-deep">
                <p className="font-bold ">Phone:</p>
                <p className="px-2">
{about?.phone}

                </p>
              </span>
              {/* <Link href="/stores" passHref>
                <button
                style={{color:textColor ,backgroundColor:iconColor}}
                  type="button"
                  className="px-16 py-3 mt-4  text-md md:text-lg font-medium uppercase rounded shadow-lg cursor-pointer   hover:shadow-xl"
                >
                  View Stores
                </button>
              </Link> */}
              {/* <p className="px-2 text-sm text-deep">
                to find your nearest African Expressions store
              </p> */}
            </div>
          </div>



        </div>
    </div>
  )
}
