"use client"

import AOS from "aos"
import { useEffect } from "react"



export default function Footer(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return(
        <div id="Contacts" className="overflow-auto">
            <div className="px-20 max-lg:px-12 max-md:px-6 py-4 text-zinc-600 bg-zinc-300">
                <div className="text-2xl text-center mb-10 font-bold mt-4">Contact : </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-2" data-aos="fade-up">
                    <div className="text-sm  mt-4" data-aos="fade-right">
                        <div className="font-bold mb-1">Devraj Kumar</div>
                        <div>Email: <a className="underline" href="mailto:devrajk0405@gmail.com" target="blank">devrajk0405@gmail.com</a></div>
                        <div><a className="underline" href="https://github.com/devRojha" target="blank">GitHub</a></div>
                    </div>
                    <div className="flex max-sm:justify-center"data-aos="fade-left">
                        <div className="text-sm  mt-4 ">
                            <div className="font-bold mb-1">Social</div>
                            <div className="flex flex-col">
                                <div><a href="https://www.linkedin.com/in/devraj-kumar-5191ba250/" className=" hover:border-b border-zinc-600" target="blank">Linkedin</a></div>
                                <div><a href="https://www.youtube.com/@DuckScript" className=" hover:border-b border-zinc-600" target="blank">Youtube</a></div>
                                <div><a href="https://x.com/devR_04" className=" hover:border-b border-zinc-600" target="blank">X</a></div>
                                <div><a href="https://www.instagram.com/d_raj04/" className=" hover:border-b border-zinc-600" target="blank">Instagram</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green-800 w-full text-center text-white text-sm">@ All right reserved</div>
        </div>
    )
}