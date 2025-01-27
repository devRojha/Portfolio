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
                    <a href="https://code.alpha-dev.tech/" className=" rounded-lg border flex flex-col" data-aos="fade-right" target="blank">
                        <ProjectIMG img={"CA"}  len={8}/>
                        <div className="text-center text-blue-500 font-bold py-2">Code.Alpha</div>
                    </a>
                    <a href="https://elective.vercel.app/" className=" rounded-lg border flex flex-col" data-aos="fade-down" target="blank">
                        <ProjectIMG img={"Elective"}  len={11}/>
                        <div className="text-center text-blue-500 font-bold py-2">Elective</div>
                    </a>
                    <a href="https://www.luminaerospace.tech/" className=" rounded-lg border flex flex-col" data-aos="fade-left" target="blank">
                        <ProjectIMG img={"Lumin"}  len={9}/>
                        <div className="text-center text-blue-500 font-bold py-2">Lumin Aerospace</div>
                    </a>
                    <a href="https://iscesti2025.vercel.app/" className=" rounded-lg border flex flex-col" data-aos="fade-right" target="blank">
                        <ProjectIMG img={"ISCESTI"}  len={4}/>
                        <div className="text-center text-blue-500 font-bold py-2">ISCESTI2025</div>
                    </a>
                    <a href="https://www.nitp.ac.in/Department/" className=" rounded-lg border flex flex-col" data-aos="fade-up" target="blank">
                        <ProjectIMG img={"NITP"}  len={7}/>
                        <div className="text-center text-blue-500 font-bold py-2">NIT Patna All Department Section</div>
                    </a>
                    <a href="https://rollpark06.netlify.app/" className=" rounded-lg border flex flex-col" data-aos="fade-left" target="blank">
                        <ProjectIMG img={"Rollpark"}  len={7}/>
                        <div className="text-center text-blue-500 font-bold py-2">Rollpark</div>
                    </a>
                </div>
            </div>
        </div>
    )
}