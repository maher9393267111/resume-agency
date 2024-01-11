import React from "react";
import { LangContextProvider } from "@/src/context/langContext";
import Navbar from "./navbar";
import Footer from "./footer";
export default function ClientLayout({ children ,user }) {
  return (
    <div className="  ">
      <Navbar user={user} />

{/* {user && user?.name} */}

      {children}

      <Footer />
    </div>
  );
}
