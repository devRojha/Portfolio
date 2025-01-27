"use client"



export default function SkillAnimate({skill,val, id} : {skill:string , val : string, id:string}){
    return(
        <div>
            <div className="flex">
                <div className="h-full flex flex-col justify-center font-bold">{skill}</div>
                <div className="flex flex-col justify-center w-full">
                    <div className="rounded-full h-1 bg-white ml-8 overflow-hidden relative">
                        <div className={`w-0 rounded-full h-1 bg-blue-500 animate-skill-bar${id}`}></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes skill-bar${id} {
                from {
                    width: 0%;
                }
                to {
                    width: ${val}%;
                }
                }
                .animate-skill-bar${id} {
                animation: skill-bar${id} 4s ease-in-out forwards;
                }
            `}</style>
        </div>
    )
}