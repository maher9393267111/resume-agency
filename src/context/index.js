import { deleteCookie } from "cookies-next";
import { useRouter  } from "next/router";
import { createContext , useState ,useEffect} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const router = useRouter();
  const { locale, asPath } = useRouter()
const [dir ,setDir] = useState('rtl')

const [lang ,setLang]= useState("ar")
  const logoutHandler = () => {
    deleteCookie("token");
    router.push("/login");
  };





  useEffect(() => {
    console.log("chanege effect")

    setDir(locale === 'en' ? 'ltr' : 'rtl')


  
  }, [locale]);






  
  return (
    <UserContext.Provider value={{ logoutHandler  , dir }}>
      {children}
    </UserContext.Provider>
  );
};
