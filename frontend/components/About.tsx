"use client"

import { useEffect } from "react";
import SkillAnimate from "./SkillAnimate"
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillList = [
    {
        id : "0",
        skill : "C++",
        val  : "95"
    },
    {
        id : "1",
        skill : "JAVA",
        val  : "80"
    },
    {
        id : "2",
        skill : "Python",
        val  : "80"
    },
    {
        id : "3",
        skill : "Javascript",
        val  : "90"
    },
    {
        id : "4",
        skill : "Typescript",
        val  : "70"
    },
    {
        id : "5",
        skill : "React",
        val  : "90"
    },
    {
        id : "6",
        skill : "Next",
        val  : "95"
    },
    {
        id : "7",
        skill : "Tailwind CSS",
        val  : "95"
    },
    {
        id : "8",
        skill : "Node / Express",
        val  : "95"
    },
    {
        id : "9",
        skill : "Serverless Backend",
        val  : "80"
    },
    {
        id : "10",
        skill : "MongoDB",
        val  : "95"
    },
    {
        id : "11",
        skill : "PostgreSQL",
        val  : "95"
    },
    {
        id : "14",
        skill : "Docker",
        val  : "80"
    },
]


export default function About(){
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
    return(
        <div id="About" className="mb-10 overflow-auto">
            <div className="mx-4 max-sm:mx-2">
                <div className="font-bold text-pretty text-3xl mb-8">ABOUT</div>
                <div className="grid grid-cols-2 max-md:grid-cols-1">
                    <div className="pt-[300px] max-md:pt-8 max-md:mb-8" data-aos="fade-right">
                         <div className="max-md:border-b rounded-lg p-4 max-sm:p-1">
                            <div className="text-center font-bold text-2xl mb-4 text-yellow-500">Who Am I?</div>
                            <div className="flex text-justify overflow-auto">
                                <div className="h-[400px]">
                                    Welcome to my portfolio! I&apos;m Devraj Kumar, a third-year Electrical Engineering student at NIT Patna, with a strong passion for Software Development and cutting-edge technologies. I&apos;ve cultivated a robust foundation in the MERN stack and actively honed my skills to build scalable, efficient solutions. In the realm of competitive programming, I&apos;ve solved over 1200+ challenging problems across platforms like Codeforces, LeetCode, GeeksforGeeks, and CodeChef, achieving notable global rankings and sharpening my problem-solving skills. As the Captain of the Robotics Club at NIT Patna, I&apos;ve demonstrated leadership by spearheading innovative projects and guiding my team to success in multiple national-level competitions. My passion for innovation extends to my selection for an international conference on sports engineering, where I am contributing to a collaborative team project. Beyond the technical domain, I am a national-level badminton player, embodying qualities of discipline, resilience, and high performance under pressure. These experiences, coupled with my technical proficiency, leadership roles, and extracurricular achievements, reflect my well-rounded approach to learning and contribution. Here, you&apos;ll find my journey, achievements, and milestones that showcase my commitment to driving meaningful impact through technology and innovation. Let&apos;s create something remarkable together!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-l max-md:border-b max-md:border-l-0 rounded-lg p-4" data-aos="fade-left">
                            <div className="text-center font-bold text-2xl mb-4 text-yellow-500">Technical Skills</div>
                            <div className="space-y-2 font-serif">
                                {SkillList.map((list)=>
                                    <SkillAnimate key={list.id} id={list.id} skill={list.skill} val={list.val}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}