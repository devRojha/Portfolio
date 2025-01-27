"use client"

import ProjectIMG from "./ProjectIMG";


export default function Projects(){
    return(
        <div id="Projects" className="mb-10">
            <div className="mx-4">
                <div className="font-bold text-pretty text-3xl mb-8">Projects</div>
                <div className="flex flex-wrap gap-4 justify-center">
                    <div className=" rounded-lg border flex flex-col">
                        <ProjectIMG img={"CA"}  len={8}/>
                        <div className="text-center font-bold py-2">Code.Alpha</div>
                    </div>
                    <div className=" rounded-lg border flex flex-col">
                        <ProjectIMG img={"Elective"}  len={11}/>
                        <div className="text-center font-bold py-2">Elective</div>
                    </div>
                    <div className=" rounded-lg border flex flex-col">
                        <ProjectIMG img={"ISCESTI"}  len={4}/>
                        <div className="text-center font-bold py-2">ISCESTI2025</div>
                    </div>
                </div>
            </div>
        </div>
    )
}