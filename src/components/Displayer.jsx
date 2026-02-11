"use client"

import { useState } from "react"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

import HomeDisplay from "./HomeDisplay"
import Repository from "./Repository"
import Chatbot from "./Chatbot"

export default function Displayer({}) {

    const sideMenus = [
    {name : "Micro Threads", iconUrl:"/icons8-threads-48.png"},
    {name : "Repositories", iconUrl:"/icons8-repository-48.png"},
    {name : "Ask AI", iconUrl:"/icons8-ai-64.png"},
  ]

  const [activeMenu, setActiveMenu] = useState("Micro Threads")




    return (
        <section className="h-screen w-screen flex flex-row bg-gray-50 relative">
            <Sidebar sideMenus={sideMenus} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            {activeMenu !== "Ask AI" ? 
            <div className="w-285 h-full">         
                <Navbar />
                {activeMenu === "Micro Threads" && <HomeDisplay />}
                {activeMenu === "Repositories" && <Repository />}
            </div> :
            <div className="w-285 h-full">         
                <Chatbot />
            </div>}

            {activeMenu === "Micro Threads" && 
            <button className="glow absolute w-20 h-20 bg-indigo-200 rounded-full
            flex flex-col justify-center items-center bottom-15 left-70 z-99">
                <img src="/icons8-plus-48.png" alt=""/>
            </button>}

        </section>
    )
}