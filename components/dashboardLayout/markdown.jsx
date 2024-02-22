import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from "draftjs-to-html";
import {
  ContentState,
  EditorState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
//import { Editor } from "react-draft-wysiwyg";
//import htmlToDraft from "html-to-draftjs";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor({ desc, setDesc }) {
  // Setting editors state, session, router, id
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    // Redirect if not authenticated




    import("html-to-draftjs").then((htmlToDraft) => {
      const blocksFromHtml = htmlToDraft.default(desc);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      setEditorState(EditorState.createWithContent(contentState));
    });
  }, []); // Add `status` to dependencies

  const onEditorStateChange = (state) => {
    setEditorState(state);

    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    setDesc(description);
  };

  return (
    <div className="bg-[#F1F3F4] dark:bg-dark-extra min-h-[100px] pb-16 print:pb-0 ">
      <Editor
        editorState={editorState}
        onEditorStateChange={
         // setEditorState
          onEditorStateChange
        }
        toolbarClassName="flex sticky top-0 z-50 sm:!justify-center print:!hidden dark:!bg-dark-mid !border-0"
        editorClassName="mt-4 print:!m-0 print:!mx-auto sm:mt-6 py-1 sm:py-5 px-4 sm:px-10 bg-white shadow-md print:!shadow-none max-w-[90%] sm:max-w-3xl !min-h-[300px] mx-auto ring-1 print:ring-0 ring-gray-300 print:block"
      />
    </div>
  );
}

export default TextEditor;

// import React from 'react'
// import { useState, useMemo } from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";

// const modules = {
//   toolbar: [
//   //   [{ header: "1" }, { header: "2" }, { font: [] }],
//   //   [{ size: [] }],
//   //   ["bold", "italic", "underline", "strike", "blockquote"],
//   //   [
//   //     { list: "ordered" },
//   //     { list: "bullet" },
//   //     { indent: "-1" },
//   //     { indent: "+1" },
//   //     { direction: 'rtl' }
//   //   ],
//   //   ["link", "image", "video"],
//   //   ["clean"],

//   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//   ['blockquote', 'code-block'],
//   ['link', 'image'],

//   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//   [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
//   [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
//   [{ 'direction': 'ltr' }],                         // text direction

//   // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//   [{ 'font': [] }],
//   [{ 'align': [] }],

//   ['clean']

//    ],

// };

// export default function Markdown({setDesc ,desc}) {

//     const QuillNoSSRWrapper = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

//   return (
//     <div className="w-full h-[300px]">
//         <QuillNoSSRWrapper
//           modules={modules}
//           theme="snow"
//           className="h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md    border-indigo-500 hover:border-blue-600"
//           value={desc}
//           // setValue={setDesc}
//           label={"Description"}
//           onChange={setDesc}

//         />
//       </div>
//   )
// }
