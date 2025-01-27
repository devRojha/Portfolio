"use client"



export default function Footer(){
    return(
        <div id="Contacts" className="bg-zinc-400 px-4 py-8">
                <div className="font-bold text-center text-black text-3xl mb-8">Contacts</div>
                <div className="grid grid-cols-4 max-sm:grid-cols-2">
                    <div className="font-serif">
                        <div className="text-2xl max-sm:text-lg text-slate-800 font-bold mb-2">Devraj Kumar</div>
                        <a href="mailto:devrajk0405@gmail.com" className="text-zinc-600 hover:border-b">Email</a>
                    </div>
                    <div className="col-span-2 font-serif max-sm:col-span-1">
                        <div className="text-2xl max-sm:text-lg text-slate-800 font-bold mb-2">Social</div>
                        <div className="flex flex-col text-zinc-600">
                            <div><a href="https://www.linkedin.com/in/devraj-kumar-5191ba250/" className=" hover:border-b" target="blank">Linkdin</a></div>
                            <div><a href="https://www.youtube.com/@DuckScript" className=" hover:border-b" target="blank">Youtube</a></div>
                            <div><a href="https://x.com/devR_04" className=" hover:border-b" target="blank">X</a></div>
                            <div><a href="https://www.instagram.com/d_raj04/" className=" hover:border-b" target="blank">Instagram</a></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}