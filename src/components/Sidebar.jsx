"use client"

import { useState } from "react"

export default function Sidebar({sideMenus, activeMenu, setActiveMenu}) {


    return (
        <div className="max-w-100 min-w-80 border-gray-300 bd p-1">
            <div className="p-10">
                <h1 className="">TokoHub</h1>
              
            </div>

            <div className="flex flex-col items-start">
                {
                    sideMenus.map((menu, index) => {
                        return <button key={index} 
                        className={`py-4 pl-8 w-full text-start hover:pl-10 transition-all duration-300 ease-in-out rounded-xl flex flex-row items-center gap-4
                        ${menu.name === activeMenu && "bg-gray-100 pl-10"}`}
                        onClick={() => setActiveMenu(menu.name)} 
                        ><img className="w-7 h-7" src={menu.iconUrl} alt="" />{ menu.name}</button>
                    })
                }
            </div>
        </div>
    )
}