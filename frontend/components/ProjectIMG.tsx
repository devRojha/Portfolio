"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PropsType {
  img: string;
  len: number;
}

export default function ProjectIMG(Props: PropsType) {
  const [itr, setItr] = useState<number>(1);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(true);

      // Wait for fade-out to complete, then update the image
      setTimeout(() => {
        if (itr === Props.len) {
          setItr(1);
        } else {
          setItr(itr + 1);
        }
        // Trigger fade in
        setFade(false);
      }, 500); // Matches the CSS transition duration
    }, 1500); // Time between image changes

    return () => clearInterval(interval);
  }, [itr, Props.len]);

  return (
    <div className="w-[370px] relative">
      <Image
        className={`h-[270px] rounded-lg transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        src={`/${Props.img}${itr}.png`}
        width={1000}
        height={1000}
        alt="Loading..."
      />
    </div>
  );
}
