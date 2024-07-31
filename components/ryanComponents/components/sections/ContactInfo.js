const ContactInfo = ({about ,email ,bgColor ,iconTextColor}) => {
  return (
    <div dir="rtl" className="conten contac">
      {/* title */}
      {/* <div className="title">Get in Touch</div> */}
      {/* content */}


      <div dir="" className="row">
        <div dir='' className="col col-d-12 col-t-12 col-m-12 border-line-v">




          <div dir='' className="info-lis font-serif ">
            <ul className=" flex flex-col md:flex-wrap  md:flex-row gap-">
         


              <li dir="" className=" md:!w-1/2 my-2">

<strong className={` ${bgColor} ${iconTextColor} rounded-md py-1 px-3 ml-4`}>כתובת:</strong> 


{about?.adress}


</li>


<li dir="" className="my-2 md:!w-1/2">

<strong className={` ${bgColor} ${iconTextColor} rounded-md py-1 px-3 ml-4`}>אימייל:</strong> 


{email}


</li>


<li dir="" className=" md:w-1/2 my-2 border-b pb-2 !border-b-gray-300 !border-b-1">

<strong className={` ${bgColor} ${iconTextColor} rounded-md py-1 px-3 ml-4`}>נייד:</strong> 


{about?.phone}


</li>


<li dir="" className=" md:w-1/2 my-2 border-b pb-2 !border-b-gray-300 !border-b-1">

<strong className={` ${bgColor} ${iconTextColor} rounded-md py-1 px-3 ml-4`}>משרד:</strong> 


{about?.phone2}


</li>

              {/* <li className=" ">
                <strong>Email : </strong> {email}
              </li>
              <li className="">
                <strong>Phone :</strong> {about?.phone}
              </li> */}
            
            </ul>
          </div>


        </div>
        <div className="clear" />
      </div>

    </div>
  );
};
export default ContactInfo;
