"use client"

import { useEffect } from "react";
import ProjectIMG from "./ProjectIMG";
import AOS from "aos";


export default function Works(){
    useEffect(()=>{
            AOS.init({duration:2000});
        },[])
    return(
        <div id="Works" className="mb-10 overflow-auto">
            <div className="mx-4">
                <div className="font-bold text-pretty text-3xl mb-8">Works</div>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="https://code.alpha-dev.tech/" className=" rounded-lg border flex flex-col" data-aos="fade-up-right">
                        <ProjectIMG img={"CA"}  len={8}/>
                        <div className="text-center text-blue-500 font-bold py-2">Code.Alpha</div>
                    </a>
                    <a href="https://elective.vercel.app/" className=" rounded-lg border flex flex-col" data-aos="fade-up">
                        <ProjectIMG img={"Elective"}  len={11}/>
                        <div className="text-center text-blue-500 font-bold py-2">Elective</div>
                    </a>
                    <a href="https://iscesti2025.vercel.app/" className=" rounded-lg border flex flex-col" data-aos="fade-up-left" >
                        <ProjectIMG img={"ISCESTI"}  len={4}/>
                        <div className="text-center text-blue-500 font-bold py-2">ISCESTI2025</div>
                    </a>
                </div>
            </div>
        </div>
    )
}