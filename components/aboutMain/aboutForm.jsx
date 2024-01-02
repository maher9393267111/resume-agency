import React from 'react'

export default function AboutForm() {
  return (
    <div>AaboutForm</div>
  )
}






// import React, { useState, useEffect } from "react";

// import {
//   Button,
//   Form,
//   Upload,
//   message,
//   Input,
//   Select,
//   Switch,
//   InputNumber,
// } from "antd";
// //const { TextArea } = Input;

// import Image from "next/image";

// const AboutForm = ({
//   onFinish,
//   initialValues,
//   // file,
//   // setFile,
//   //isupdate = false,
// }) => {
//   const [image, setImage] = useState(initialValues?.image || "");

//   return (
//     <div className=" ">
//       <div className=" w-full  py-6 px-6">
//         <Form
//           layout="vertical"
//           // onFinish same as submit normal form
//           onFinish={(values) =>
//             // name of our function
//             onFinish({
//               ...values,
//               myImage:image,
//               headImage:"",
//             })

//           }
//           initialValues={{
//             title: initialValues?.title || "",
//              image: initialValues?.image || "",
//              desc: initialValues?.desc || "",
//              myImage: initialValues?.myImage || "",
//              headImage: initialValues?.headImage || "",
//              whatsapp  :initialValues?.whatsapp || "",
//              telgram   :initialValues?.telgram || "",
//              pdf:initialValues?.pdf || "",
//              link:initialValues?.link  || "",

//              facebook  :initialValues?.facebook || "",
//              instagram  :initialValues?.instagram || "",    
//              twitter   :initialValues?.twitter || "",    
//           }}
//         >
//           <Form.Item name="title" label="Title">
//             <Input />
//           </Form.Item>


//           <Form.Item name="title" label="Title">
//             <Input />
//           </Form.Item>


          
//           {/* <Form.Item name="desc" label="Description">
//             <Input.TextArea rows={4} />
//           </Form.Item> */}

    
//           <Form.Item name="link" label="Link">
//             <Input />
//           </Form.Item>


          
//           <Form.Item name="whatsapp" label="Whatsapp">
//             <Input />
//           </Form.Item>


   
//           <Form.Item name="telgram" label="Telgram">
//             <Input />
//           </Form.Item>


   
//           <Form.Item name="instagram" label="Instagram">
//             <Input />
//           </Form.Item>


   
//           <Form.Item name="twitter" label="Twitter">
//             <Input />
//           </Form.Item>

//           <Form.Item name="pdf" label="pdf">
//             <Input />
//           </Form.Item>





//           <div className=" grid gap-3 md:grid-cols-4 grid-cols-1"></div>

//           {/* -----images upload----- */}
// {/* 
//           <div>
//             <Upload
//               accept="image/*"
//               maxCount={1}
           
//               beforeUpload={(file) => {
//                 setFile(file);
              
//                 return false;
//               }}
//               listType="picture-card"
           
//               onRemove={() => {
//                 setFile("");
//                 console.log("Removed files");
//               }}
//             >
//               Upload Image
//             </Upload>
//           </div> */}

        

//           {/* {image && (
//             <div className="  w-24 md:w-24 relative">
//               <img className=" w-24 h-24  rounded-lg" src={image} alt="" />

//               <p
//                 onClick={() => setImage("")}
//                 className="  !text-red-500 cursor-pointer text-white font-semibold text-center"
//               >
//                 Remove
//               </p>
//             </div>
//           )} */}

//           <div className=" ">
//             <Button
//               className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
//               type="primary"
//               htmlType="submit"
//             >
//               Publish
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default AboutForm;

