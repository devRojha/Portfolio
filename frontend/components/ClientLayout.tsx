"use client"


import { useState } from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Menubar from "./Menubar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [menu , setMenue] = useState<boolean>(false);
    return (
    <div >
        <Appbar menu={menu} setMenue={setMenue}/>
        <Menubar menu={menu}/>
        <div onClick={()=>setMenue(false)}>

            { children }
        </div>
        <Footer />
    </div>
  );
}