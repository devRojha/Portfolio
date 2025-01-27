"use client";


export default function Menubar({menu} : {menu:boolean}) {
  return (
    <div>
      <div className={`${!menu ? "right-[-400px]" : "right-0"} top-10 w-[200px] rounded-b-lg border-b border-2xl bg-gray-700 z-20 fixed transition-all duration-500 ease-linear`}>
            <div className="flex flex-col space-y-10 pl-8 font-bold pt-20 pb-10 text-white">
                <div className="">
                    <div className=""><a className="hover:border-b active:text-yellow-500 border-yellow-500" href="">Home</a></div>
                </div>
                <div className=" ">
                    <div className=""><a className="hover:border-b active:text-yellow-500 border-yellow-500" href="#About">About</a></div>
                </div>
                <div className=" ">
                    <div className=""><a className="hover:border-b active:text-yellow-500 border-yellow-500" href="#Works">Works</a></div>
                </div>
                {/* <div className=" ">
                    <div className=""><a className="hover:border-b active:text-yellow-500 border-yellow-500" href="">More</a></div>
                </div> */}
                <div className=" ">
                    <div className=""><a className="hover:border-b active:text-yellow-500 border-yellow-500" href="#Contacts">Contacts</a></div>
                </div>
            </div>
      </div>
    </div>
  );
}