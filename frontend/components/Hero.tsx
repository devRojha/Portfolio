import Image from "next/image";

export default function Hero() {
  return (
      <div className="pt-[80px] h-screen mb-8">
        <div className="grid grid-cols-8 max-sm:grid-cols-1 max-sm:flex flex-col-reverse h-full">
          <div className="col-span-5 flex flex-col justify-center pl-20">
              <div className="font-bold mb-2 flex">
                <div className="px-6 rounded-full border border-slate-400 mb-4">SOFTWARE DEVELOPER</div>
              </div>
              <div className="font-bold text-5xl mb-2">DEVRAJ KUMAR</div>
              <div className="my-4">As a budding MERN stack developer, I am keen to put my theoretical understanding into practical use within the software domain. I am actively exploring opportunities to contribute and enhance my skills through engaging internship experiences this summer.</div>
              <div className="space-x-4">
                <button className="px-4 py-2 font-bold text-lg rounded-lg bg-yellow-500">Download CV</button>
                <button className="px-4 py-2 font-bold text-lg rounded-lg bg-black">Hire Me Now</button>
              </div>
          </div>
          <div className=" col-span-3  flex flex-col justify-center">
            <div>
              <Image className="h-[450px] w-[400px] rounded-full" src={"/owner.png"} height={1000} width={1000} alt="Loading..."/>
            </div>
          </div>
        </div>
      </div>
  );
}
