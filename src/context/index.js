import { deleteCookie } from "cookies-next";
import { useRouter  } from "next/router";
import { createContext , useState ,useEffect} from "react";

import { db, auth } from "../../firebase";
import { successHandler ,errorHandler } from "../lib/errorHandler";



import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import { collection, doc, getDoc, setDoc } from "firebase/firestore";

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



  const register = (
    email,
    password,
    firstName,
  
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
       // setPageLoading(true);
        //after saving data stop spinner
        console.log("response:===>",res);




        const userRef = doc(collection(db, "users"), res.user?.uid);

        await setDoc(userRef, {
          uid: res.user?.uid,
          email,
          name: firstName,
      
          role: "user",
        });
        

        successHandler(
          `${locale === "ar" ? "تم التسجيل بنجاح" : "Register success"}`
        );
  

        router.push("/");
      })
      .catch((err) => {
        errorHandler(err?.message)
        console.error(err.message);
      });
  };

  const signInUser = async (email, password) => {
    try {
    //  setPageLoading(true);
      //response of user data
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log("user===>",userCredential.user.emailVerified)
     
      
      successHandler(
        `${locale === "ar" ? "تم التسجيل بنجاح" : "login success"}`
      );



      router.push("/");
    } catch (error) {
     errorHandler(error?.message)
      console.log(error?.message);
      
    }
  };


  const [userData,setUserData] = useState(null);

  const [profile,setProfile] = useState(null);




  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log("user Auth Data--->", user);
      // if auth user is  already maked register or Login
      // find his profile data from firebase/firetore
     // setPageLoading(true);
      if (user) {
        // set Authuser data in state
        setUserData(user);
        localStorage.setItem("isLogged", true);
        // specify path for get Auth user Data from firestore
        const userRef = doc(db, "users", user?.uid);
  
        const docSnap = await getDoc(userRef);
  
        // if AuthUser have data in firestore set his data in setProfile
        if (docSnap.exists()) {
          console.log("firstore Data of user--->", docSnap.data());
          setProfile(docSnap.data());
        }
      }
  
     // setPageLoading(false);
    });
  }, []);
  

  const logoutfirebase = () => {
    signOut(auth);
    setProfile(null);
  
    };
  










  useEffect(() => {
    console.log("chanege effect")

    setDir(locale === 'en' ? 'ltr' : 'rtl')


  
  }, [locale]);






  
  return (
    <UserContext.Provider value={{ logoutHandler  , dir ,register ,signInUser ,profile,userData,logoutfirebase }}>
      {children}
    </UserContext.Provider>
  );
};
