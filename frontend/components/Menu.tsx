"use client"
export default function Appbar() {
    return (
      <div className="fixed w-full z-30  bg-zinc-800 h-[70px] borde border-red-700 flex flex-col justify-center">
        <div className="flex justify-between px-20 max-lg:px-6 max-sm:px-4">
            <div className="font-bold text-5xl max-md:text-3xl"><span className="text-yellow-500">D</span>EVRAJ</div>
            <div className="flex flex-col justify-center">
                <ul className="flex space-x-16 max-lg:space-x-10 font-bold">
                    <li className="hover:border-b border-yellow-500"><a href="">Home</a></li>
                    <li className="hover:border-b border-yellow-500"><a href="">About</a></li>
                    <li className="hover:border-b border-yellow-500"><a href="">Projects</a></li>
                    <li className="hover:border-b border-yellow-500"><a href="">More</a></li>
                    <li className="hover:border-b border-yellow-500"><a href="">Contacts</a></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  