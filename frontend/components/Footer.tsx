"use client"



export default function Footer(){
    return(
        <div className="">
            <div className="px-20 max-lg:px-12 max-md:px-6 py-4 text-zinc-600 bg-zinc-300">
                <div className="text-2xl text-center mb-10 font-bold mt-4">Contact us : </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-2 max-sm:space-y-2">
                    <div className="text-sm  mt-4">
                        <div className="font-bold mb-1">Devraj Kumar</div>
                        <div>Email: <a className="underline" href="mailto:devrajk0405@gmail.com">devrajk0405@gmail.com</a></div>
                    </div>
                    <div className="flex max-sm:justify-center">
                        <div className="text-sm  mt-4 ">
                            <div className="font-bold mb-1">Social</div>
                            <div className="flex flex-col">
                                <div><a href="https://www.linkedin.com/in/devraj-kumar-5191ba250/" className=" hover:border-b border-zinc-600" target="blank">Linkdin</a></div>
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