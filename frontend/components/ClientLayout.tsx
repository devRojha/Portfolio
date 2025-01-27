"use client"


import { useState } from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    // const [option , setoption] = useState(true);
    return (
    <div>
        <Appbar />
        { children }
        <Footer />
        <div className="bg-green-500 text-white text-[12px] font-serif text-center">@ All Right Reserved</div>
    </div>
  );
}