// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../src/lib/animateView";

export const ServiceCard = ({ index, title, color ,desc }) => (
  // w-screen lg:w-[22%] md:w-[28%]
  <div
key={index}
  
  className={`    bg-purple-100  rounded-lg  !shadow-2xl  hover:sm:scale transition-all  duration-500 ` }>
    <div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <div className='text-5xl text-white'>{icon}</div> */}

        <div className=' text-center text-white'>

<h1 className="text-[32px] leading-[42px] font-bold text-center md:text-2xl md:leading-[62px] ">
  {title}
</h1>

<p  className=" text-xl ">{desc}</p>

     


        </div>
      </div>
    </div>
  </div>
);