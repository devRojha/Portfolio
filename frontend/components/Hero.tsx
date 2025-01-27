"use client"
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
  return (
      <div className="pt-[80px] h-screen mb-8 overflow-auto">
        <div className="grid grid-cols-8 max-sm:grid-cols-1 max-sm:flex flex-col-reverse justify-center h-full">
          <div className="col-span-5 flex flex-col justify-center pl-20 max-lg:pl-4">
              <div className="font-bold mb-2 flex">
                <div className="px-6 rounded-full border border-slate-400 mb-4">SOFTWARE DEVELOPER</div>
              </div>
              <div className="font-bold text-5xl max-md:text-3xl max-sm:text-2xl mb-2" data-aos="fade">DEVRAJ KUMAR</div>
              <div data-aos="fade-right" className="my-4 max-sm:text-sm">As a budding MERN stack developer, I am keen to put my theoretical understanding into practical use within the software domain. I am actively exploring opportunities to contribute and enhance my skills through engaging internship experiences this summer.</div>
              <div className="space-x-4" >
                <a href="Devraj.pdf" className="px-4 py-3 font-bold text-lg max-sm:text-sm rounded-lg bg-yellow-500" >Download CV</a>
                <a href="mailto:devrajk0405@gmail.com" className="px-4 py-3 font-bold text-lg max-sm:text-sm  rounded-lg bg-black">Hire Me Now</a>
              </div>
          </div>
          <div className="col-span-3  max-sm:mb-10 flex flex-col max-sm:flex-row justify-center">
            <div className="flex max-md:justify-end" data-aos="fade-left">
              <Image className="h-[450px] w-[400px] max-lg:h-[350px] max-lg:w-[350px] max-md:h-[300px] max-md:w-[300px] max-sm:h-[250px] max-sm:w-[250px] rounded-full" src={"/owner.png"} height={1000} width={1000} alt="Loading..."/>
            </div>
          </div>
        </div>
      </div>
  );
}
