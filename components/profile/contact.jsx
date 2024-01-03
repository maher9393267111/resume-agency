import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ContactForm({color ,user ,textColor}) {

    
const router = useRouter()

const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [number, setNumber] = React.useState("");
const [message, setMessage] = React.useState("");

async function handleSubmit(event) {
  event.preventDefault();
 
}





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
                // bg-white border border-gray-300
                style={{borderColor:color }}
                className="flex items-center w-full h-10 pl-3 text-sm font-normal
                    bg-white shadow-lg text-deep focus:outline-none  rounded-md"
                placeholder="Full Name  "
              />
            </div>
            <div className="flex flex-col mt-4 md:mr-16">
              <label
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
                style={{borderColor:color }}
                className="flex items-center w-full h-10 pl-3 text-sm font-normal bg-white border  shadow-xl rounded-md  text-deep focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col mt-4 md:mr-16">
              <label
                htmlFor="number"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-deep"
              >
                Contact Number
              </label>
              <input
                type="tel"
                required
                id="number"
                style={{borderColor:color }}
                value={number}

                onChange={(e) => setNumber(e.target.value)}
                className="flex items-center w-full h-10 pl-3 text-sm font-normal bg-white border  shadow-xl rounded  text-deep focus:outline-none"
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
                className="py-3 pl-3 text-sm placeholder-gray-5 bg-transparent border border-gray-300 rounded shadow-xl  !bg-white resize-none focus:outline-none text-deep "
                placeholder="Message"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="px-16 py-3 mt-4 text-lg font-medium text-white uppercase rounded-md shadow-lg cursor-pointer bg-accent hover:bg-yellow-800/80 hover:shadow-sm"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center">
            <div className="flex flex-col items-center w-full space-y-2">
              <p className="text-2xl text-deep font-georgia">Head Office</p>
              <span className="flex text-sm text-deep">
                <p className="font-bold ">Address:</p>
                <p className="px-2">
                  79 Burman Road, Deal Party, Port Elizabeth, Eastern Cape, 6012
                </p>
              </span>
              <span className="flex text-sm text-deep">
                <p className="font-bold ">Phone:</p>
                <p className="px-2">+27(0)41 486 2433</p>
              </span>
              <Link href="/stores" passHref>
                <button
                  type="button"
                  className="px-16 py-3 mt-4 text-lg font-medium text-white uppercase rounded shadow-lg cursor-pointer bg-accent hover:bg-yellow-800/80 hover:shadow-sm"
                >
                  View Stores
                </button>
              </Link>
              <p className="px-2 text-sm text-deep">
                to find your nearest African Expressions store
              </p>
            </div>
          </div>



        </div>
    </div>
  )
}
