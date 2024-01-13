import React from "react";
import Image from "next/image";
export default function PriceCard({ index, image, title, desc, price, list }) {
  return (
    <div dir="rtl" key={index} className=" shadow-2xl bg-white  rounded-2xl p-12">
      <div className="">
        <div>
          {/* <img className=' object-cover' src={image} alt="" /> */}
          <Image
            width={300}
            height={300}
            className=" mx-auto object-cover rounded-mc shadow-xl rounded-lg"
            src={image}
            alt=""
          />
        </div>


        <div className="my-4 text-center flex-col  space-y-2">
          <h1 className=" text-3xl font-bold">{title}</h1>

          <p className=" text-xl font-semibold    text-purple-100">{price}</p>

          {/* <p className=" font-semibold">{desc}</p> */}

{/* ---list-- */}

{/* <div className="space-y-2 text-left text-md font-medium leading-normal">

{list?.map((item,index)=>{

return(
  <h3 className="space-y-2 flex items-start    ">
  <svg
    className="w-[44px] md:mt-[5px] hidden md:block"
    width="16"
    height="17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.668 8.973 4 4 6.667-8"
      stroke="#1127E3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>

  {item}
</h3>

)

})}


</div> */}


<div className="flex h-full flex-col justify-between gap-16 p-3">
              <ul className="space-y-2 text-lef text-md font-medium leading-normal">
                {list.map((feature) => (
                  <li className="flex justify-start items-start mt-2" key={feature}>
                    {/* <Icons.check className="mr-3 h-5 w-5 shrink-0" /> */}
<p>

<svg
                      className="mx-2 w-[28px]"
                      width="16"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.668 8.973 4 4 6.667-8"
                        stroke="#1127E3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
</p>
             




                    <p className="  text-justify  pl-4">{feature}</p>
                  </li>
                ))}
              </ul>

              
            </div>





        </div>
      </div>
    </div>
  );
}
