"use client"
import React from "react";
import { useState, useCallback } from "react";

import FileUpload from "./FileUpload";

import BasicPopUp from "./BasicPopUp";
import Overlay from "./Overlay";

import { documentsJSON } from "@/lib/pdfDoc";
const preloadDoc = [
    {
        name:"Standard Grooming Anak Toko & Kelontong",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "Standard Grooming Anak Toko & Kelontong")
    },
    {
        name:"SOP Anak TOKO KTD 2025 - UPDATED",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "SOP Anak TOKO KTD 2025 - UPDATED")
    },
    {
        name:"FAQ & Template Chat Admin Djawa Group",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"FAQ",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "FAQ & Template Chat Admin Djawa Group")
    },
    {
        name:"DATA VENDOR",
        type:"Excel",
        mentors:"Idom, Devi",
        category:"Vendor",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "DATA VENDOR")
    },
    {
        name:"Standard Grooming Anak Toko & Kelontong",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "Standard Grooming Anak Toko & Kelontong")
    },
    {
        name:"SOP Anak TOKO KTD 2025 - UPDATED",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "SOP Anak TOKO KTD 2025 - UPDATED")
    },
    {
        name:"FAQ & Template Chat Admin Djawa Group",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"FAQ",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "FAQ & Template Chat Admin Djawa Group")
    },
    {
        name:"DATA VENDOR",
        type:"Excel",
        mentors:"Idom, Devi",
        category:"Vendor",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "DATA VENDOR")
    },
    {
        name:"Standard Grooming Anak Toko & Kelontong",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "Standard Grooming Anak Toko & Kelontong")
    },
    {
        name:"SOP Anak TOKO KTD 2025 - UPDATED",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"SOP",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "SOP Anak TOKO KTD 2025 - UPDATED")
    },
    {
        name:"FAQ & Template Chat Admin Djawa Group",
        type:"PDF",
        mentors:"Idom, Devi",
        category:"FAQ",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "FAQ & Template Chat Admin Djawa Group")
    },
    {
        name:"DATA VENDOR",
        type:"Excel",
        mentors:"Idom, Devi",
        category:"Vendor",
        updated:"2/12/25",
        status:"valid",
        ref: documentsJSON.find((d) => d.title === "DATA VENDOR")
    },
]

export default function Repository({}) {

    const [toggleAddDoc, setToggleAddDoc] = useState(false)

    return (
        <div className="flex flex-col w-full  h-158 overflow-y-scroll">

            {/* Doc Inputs */}
            <Overlay
            isOpen={toggleAddDoc}
            onClose={() => setToggleAddDoc(false)}
            contentClassName="absolute bg-white w-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bd rounded-2xl"
            >
                <FileUpload onClose={() => setToggleAddDoc(false)} />
            </Overlay>



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
                <div className="pl-4 flex flex-row gap-6 items-center">
                    <h1 className="">Stored Documents</h1>
                    <button className="w-7 h-7 bg-green-500 rounded-full"
                    onClick={() => setToggleAddDoc(true)}>
                        <img src="/icons8-plus-48.png" alt="+" />
                    </button>
                </div>

                <div className="flex flex-col w-full gap-0.5 ml-4 bg-gray-200">
                   <div className="flex flex-row bg-gray-50 py-1">
                        <p className="w-80 text-sm text-gray-400">Name</p>
                        <p className="w-40 text-sm text-gray-400">Type</p>
                        <p className="w-30 text-sm text-gray-400">Mentors</p>
                        <p className="w-40 text-sm text-gray-400">Category</p>
                        <p className="w-50 text-sm text-gray-400">Updated</p>
                        <p className="w-30 text-sm text-gray-400">Status</p>
                    </div>
                <div className="flex flex-col w-full gap-2 bg-gray-100 py-1">
                    {preloadDoc.map((doc, i) => <DocList key={i} doc={doc} />)}

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


function DocList({doc}) {

    console.log(doc.name)
    return (
        <button className="flex flex-row bg-white py-2 text-start">
            <p className="w-80 overflow-hidden text-ellipsis ">{doc.name}</p>
            <p className="w-40 overflow-hidden text-ellipsis ">{doc.type}</p>
            <p className="w-30 overflow-hidden text-ellipsis ">{doc.mentors}</p>
            <p className="w-40 overflow-hidden text-ellipsis ">{doc.category}</p>
            <p className="w-50 overflow-hidden text-ellipsis ">{doc.updated}</p>
            <p className="w-30 overflow-hidden text-ellipsis ">{doc.status}</p>
        </button>
    )
}

