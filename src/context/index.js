import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { createContext , useState ,useEffect} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const router = useRouter();

  const logoutHandler = () => {
    deleteCookie("token");
    router.push("/login");
  };


  const [lang, setLang] = useState('en');
  const changeLang = () => setLang(() => (lang === 'ar' ? 'en' : 'ar'));
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    // document.body.style.direction = dir;
    // document.body.setAttribute('dir', dir);


    var y=document.getElementById("main_page").setAttribute("class", dir)
    //.setAttribute("dir", dir);
   // y.setAttribute("dir" ,dir)


  }, [lang]);





  
  return (
    <UserContext.Provider value={{ logoutHandler, lang, changeLang }}>
      {children}
    </UserContext.Provider>
  );
};
