"use client"
import React from "react";

export default function Repository({}) {


    return (
        <div className="flex flex-col w-full  h-158 overflow-y-scroll">
            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Folder Groups</h1>

                <div className="flex flex-row w-full gap-8 overflow-x-scroll p-4">
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                
                </div>


            </div>
            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Stored Documents</h1>

                <div className="flex flex-col w-full gap-0.5 ml-4 bg-gray-200">
                   <div className="flex flex-row bg-gray-50 py-1">
                        <p className="w-80 text-sm text-gray-400">Name</p>
                        <p className="w-40 text-sm text-gray-400">Type</p>
                        <p className="w-50 text-sm text-gray-400">Mentors</p>
                        <p className="w-40 text-sm text-gray-400">Category</p>
                        <p className="w-30 text-sm text-gray-400">AI</p>
                        <p className="w-30 text-sm text-gray-400">Status</p>
                    </div>
                <div className="flex flex-col w-full gap-2 bg-gray-100 py-1">
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />

                </div>
                </div>
                

            </div>
        </div>
    )
}

function Folder({}) {

    const colors = [
    "bg-pink-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-indigo-200",
    "bg-gray-200",
    "bg-red-200",
    "bg-lime-200",

]

    const random = Math.floor(Math.random() * colors.length)
    return (
        <button className="bd-2 rounded-xl px-8 pr-12 py-8 w-50 h-50 flex flex-col justify-between gap-8 shrink-0">
            <div>
                <div className={`w-8 h-8 rounded-full ${colors[random]}`}>
                    <img src="/icons8-folder-48.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h2>FolderName</h2>
                <p className="text-xs text-gray-400">13 Documents</p>
            </div>
        </button>
    )
}


function DocList() {
    return (
        <button className="flex flex-row bg-white py-2 text-start">
            <p className="w-80 overflow-hidden text-ellipsis ">SOP Kerja 2024</p>
            <p className="w-40 overflow-hidden text-ellipsis ">PDF</p>
            <p className="w-50 overflow-hidden text-ellipsis ">John, Arlot</p>
            <p className="w-40 overflow-hidden text-ellipsis ">Table Manner</p>
            <p className="w-30 overflow-hidden text-ellipsis ">Yes</p>
            <p className="w-30 overflow-hidden text-ellipsis ">Valid</p>
        </button>
    )
}

