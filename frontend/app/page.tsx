"use client"
import About from "@/components/About";
import CodingProfile from "@/components/CodingProfile";
import Hero from "@/components/Hero";
import Works from "@/components/Works";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[20%] rounded-full h-1 bg-white"></div>
      </div>
      <About />
      <CodingProfile />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[40%] rounded-full h-1 bg-white"></div>
      </div>
      <Works />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[60%] rounded-full h-1 bg-white"></div>
      </div>
      {/* <More /> */}
    </div>
  );
}
