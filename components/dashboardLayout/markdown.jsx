import React from 'react'
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";


// const  QuillNoSSRWrapper = dynamic(import('react-quill'), {
//   ssr: false,
//   loading: () => <p className="loading">Loading ...</p>,
// })


const modules = {
  toolbar: [
  //   [{ header: "1" }, { header: "2" }, { font: [] }],
  //   [{ size: [] }],
  //   ["bold", "italic", "underline", "strike", "blockquote"],
  //   [
  //     { list: "ordered" },
  //     { list: "bullet" },
  //     { indent: "-1" },
  //     { indent: "+1" },
  //     { direction: 'rtl' }
  //   ],
  //   ["link", "image", "video"],
  //   ["clean"],

  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  // [{ 'direction': 'rtl' }],                         // text direction

  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'] 


   ],


};




export default function Markdown({setDesc ,desc}) {

    const QuillNoSSRWrapper = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);


  return (
    <div className="w-full h-[300px]">
        <QuillNoSSRWrapper
          modules={modules}
          theme="snow"
          className="h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md    border-indigo-500 hover:border-blue-600"
          value={desc}
          // setValue={setDesc}
          label={"Description"}
          onChange={setDesc}
        
        />
      </div>
  )
}
