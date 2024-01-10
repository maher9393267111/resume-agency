import React from "react";

const Feature = ({ data }) => {
  const newList = [];
  data.text.list.forEach((list, i) =>
    newList.push(
      <li className="flex w-full text-lg gap-[10px]" key={i}>
        <span>

        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          fill="none"
        >
          <path
            fill={data.color}
            d="M9.752 3.137V8.24l-4.42-2.552-2.25 3.899 4.42 2.55-4.42 2.55 2.25 3.898 4.42-2.552v5.104h4.5v-5.104l4.42 2.552 2.25-3.898-4.42-2.55 4.42-2.55-2.25-3.899-4.42 2.552V3.137h-4.5Zm1.5 1.5h1.5v6.202l5.37-3.101.75 1.297-5.37 3.102 5.37 3.101-.75 1.297-5.37-3.1v6.202h-1.5v-6.203l-5.37 3.101-.75-1.297 5.37-3.101-5.37-3.102.75-1.297 5.37 3.101V4.637Z"
          ></path>
        </svg>

</span>


        {list}
      </li>
    )
  );



  
  return (
    <div className="mb-[16px]   pb-4">
      <div
        className={`flex w-[98%]  md:w-[90%] mx-auto flex-col items-center gap-[7px] lg-1150:gap-[10px] ${
          data.reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1 px-14  ">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="lg-1150:w-485px px-14 mt-4 flex flex-col gap-[24px] flex-1">
          <h3 className="text-xl leading-[31px] font-bold md:text-3xl md:leading-[47px]">
            {data.text.heading}
          </h3>
          <ul className="text-lg  leading-[23px] md:text-[20px] md:leading-[26px] font-normal flex flex-col gap-[20px]">
            {newList}
          </ul>
        </div>
      </div>
    </div>
  );
};




export default Feature;