"use client"

import AOS from "aos";
import Image from "next/image"
import { useEffect } from "react";



export default function CodingProfile(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return(
        <div id="Coding" className="mb-10 bg-slate-300 overflow-auto">
            <div className="" data-aos="fade-up">
                <div className="flex justify-center space-x-4 max-sm:space-x-2  py-4">
                    <a href="https://codeforces.com/profile/devraj_4" target="blank" data-aos="fade-right"><Image className=" w-[55px] px-2  " src={"/Codeforces.png"} width={1000} height={1000} alt="Loading"/></a>
                    <a href="https://www.codechef.com/users/dev_r04" target="blank" data-aos="fade-right"><Image className=" w-[50px]  " src={"/codechef.png"} width={1000} height={1000} alt="Loading"/></a>
                    <a href="https://leetcode.com/u/devraj_04/" target="blank" data-aos="fade"><Image className=" w-[60px] px-2 " src={"/Leetcode.png"} width={1000} height={1000} alt="Loading"/></a>
                    <a href="https://www.geeksforgeeks.org/user/devraj_04/" target="blank" data-aos="fade-left"><Image className=" w-[55px] px-2 " src={"/GFG.png"} width={1000} height={1000} alt="Loading"/></a>
                    <a href="https://www.youtube.com/@DuckScript" target="blank" data-aos="fade-left"><Image className=" w-[60px] px-2 " src={"/youtube.png"} width={1000} height={1000} alt="Loading"/></a>
                </div>
            </div>
        </div>
    )
}