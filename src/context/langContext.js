
'use client';
import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');
  const changeLang = () => setLang(() => (lang === 'ar' ? 'en' : 'ar'));
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.direction = dir;
    document.body.setAttribute('dir', dir);
  }, [lang]);


  
  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};




// import { createContext , useState ,useEffect} from "react";

// export const LangContext = createContext();

// export const LangContextProvider = ({ children }) => {




//   const [lang, setLang] = useState('en');
//   const changeLang = () => setLang(() => (lang === 'ar' ? 'en' : 'ar'));
//   useEffect(() => {
//     const dir = lang === 'ar' ? 'rtl' : 'ltr';
//     // document.body.style.direction = dir;
//     // document.body.setAttribute('dir', dir);


//     var y=document.getElementById("main_page").setAttribute("class", dir)
//     //.setAttribute("dir", dir);
//    // y.setAttribute("dir" ,dir)


//   }, [lang]);



// console.log("lang" ,lang)

  
//   return (
//     <LangContext.Provider value={{  lang, changeLang }}>
//       {children}
//     </LangContext.Provider>
//   );
// };
