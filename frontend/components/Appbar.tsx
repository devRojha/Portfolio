"use client"

import AOS from "aos";
import { useEffect } from "react";

export default function Appbar({menu, setMenue} : {menu:boolean , setMenue : (value : boolean)=> void}) {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
      <div className="fixed w-full z-30  bg-zinc-800 h-[70px]  flex flex-col justify-center">
        <div className="flex justify-between px-20 max-lg:px-6 max-sm:px-4">
            <div className="font-bold text-5xl max-md:text-3xl" data-aos="fade-down"><span className="text-yellow-500 ">D</span>EVRAJ</div>
            <div className="max-sm:hidden flex flex-col justify-center">
                <ul className="flex space-x-16 max-lg:space-x-10 font-bold">
                    <li className="hover:border-b active:text-yellow-500 border-yellow-500" data-aos="fade-left"><a href="">Home</a></li>
                    <li className="hover:border-b active:text-yellow-500 border-yellow-500" data-aos="fade-left"><a href="#About">About</a></li>
                    <li className="hover:border-b active:text-yellow-500 border-yellow-500" data-aos="fade-left"><a href="#Works">Works</a></li>
                    {/* <li className="hover:border-b active:text-yellow-500 border-yellow-500" data-aos="fade-left"><a href="">More</a></li> */}
                    <li className="hover:border-b active:text-yellow-500 border-yellow-500" data-aos="fade-left"><a href="#Contacts">Contacts</a></li>
                </ul>
            </div>
            <div className="max-sm:flex hidden flex-col justify-center" data-aos="fade-left">
                <button onClick={()=>setMenue(!menu)} className=" h-6 flex flex-col justify-between">
                    <div className={`${menu ? "rotate-45 mt-4 w-8 border-t-2":""} border-t w-8 bottom-4 transition-all duration-300`}></div>
                    <div className={`${menu ? "hidden":""} border-t w-6 bottom-4 `}></div>
                    <div className={`${menu ? "-rotate-45 mb-4 w-8 border-t-2":""} border-t w-8 bottom-4 transition-all duration-300`}></div>
                </button>
            </div>
        </div>
      </div>
    );
  }
  