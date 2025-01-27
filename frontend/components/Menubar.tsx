"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface SidebarProps {
  option: boolean;
}

export default function Menubar({ option }: SidebarProps) {
    const router = useRouter();
  return (
    <div>
      <div className={`${option ? "right-[-400px]" : "right-0"} top-10 w-[260px] rounded-b-lg border-b border-2xl bg-gray-700 z-20 fixed transition-all duration-500 ease-linear`}>
            <div className="flex flex-col space-y-10 pl-8 font-bold pt-10 text-white">
                <div className="">
                    <button onClick={()=>router.push("/")} className="py-4">Home</button>
                </div>
                <div className=" ">
                    <button onClick={()=>router.push("/Committee")} className="">Committies</button>
                </div>
                <div className=" ">
                    <button onClick={()=>router.push("/Author")} className="">Author&apos;s Corner</button>
                </div>
                <div className=" ">
                    <button onClick={()=>router.push("/teams")} className="">Teams</button>
                </div>
                <div className=" ">
                    <button onClick={()=>router.push("/Venue")} className="">Venue</button>
                </div>
                <div className=" ">
                    <button onClick={()=>router.push("#footer")} className="">Contact</button>
                </div>
            </div>
            <div className="flex my-10 h-full">
                <div className="h-full  pl-4 flex flex-col justify-center">
                    <Image className=" rounded-full h-14 w-14" src={"/logo.png"} alt="Loading..." height={100} width={100}/>
                </div>
                <div className="ml-4 font-bold text-white flex flex-col justify-center">
                    <button onClick={()=>router.push("/")}>ISCESTI-2025</button>
                </div>
            </div>
      </div>
    </div>
  );
}