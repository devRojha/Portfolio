"use client"
import About from "@/components/About";
import CodingProfile from "@/components/CodingProfile";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import More from "@/components/More";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[25%] rounded-full h-1 bg-white"></div>
      </div>
      <About />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[50%] rounded-full h-1 bg-white"></div>
      </div>
      <Projects />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[75%] rounded-full h-1 bg-white"></div>
      </div>
      <CodingProfile />
      <div className="rounded-full bg-slate-500 mx-8 mb-10">
        <div className="w-[75%] rounded-full h-1 bg-white"></div>
      </div>
      <More />
      <Footer />
    </div>
  );
}
