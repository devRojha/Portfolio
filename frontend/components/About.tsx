"use client"

import { useState } from "react"
import SkillAnimate from "./SkillAnimate"

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
    return(
        <div id="About" className="mb-10">
            <div className="mx-4">
                <div className="font-bold text-pretty text-3xl mb-8">ABOUT</div>
                <div className="grid grid-cols-2 max-md:grid-cols-1">
                    <div className="pt-[300px] max-md:pt-8 max-md:mb-8">
                         <div className="max-md:border-b rounded-lg p-4">
                            <div className="text-center font-bold text-2xl mb-4 text-yellow-500">Who Am I?</div>
                            <div className="flex text-justify font-serif overflow-auto">
                                <div className="h-[400px]">
                                    As a second-year electrical engineering student, I am actively honing my skills in Software Development forming a robust foundation in the MERN stack. I&apos;ve demonstrated my problem-solving prowess by successfully navigating through over 300 complex questions on platforms like LeetCode, GeeksforGeeks, and CodeChef, achieving notable ratings. In the realm of robotics, I hold a key role as a technical coordinator in my university&apos;s robotics club, contributing significantly to various projects and showcasing practical problem-solving abilities alongside effective leadership skills. Beyond academics, I am a national-level badminton player, embodying qualities of discipline, commitment, and the ability to perform under pressure. Recently selected for an international conference on sports engineering, I actively contribute to a team project, reflecting my dedication to staying at the forefront of technological advancements. This integration of technical proficiency, leadership experiences, and athletic achievements defines my well-rounded approach, aligning with my passion for continuous learning and meaningful contributions to diverse environments.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-l max-md:border-b max-md:border-l-0 rounded-lg p-4">
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