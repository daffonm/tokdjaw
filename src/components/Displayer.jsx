"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

import HomeDisplay from "./HomeDisplay"
import Repository from "./Repository"
import Chatbot from "./Chatbot"

import LoadingSkeleton from "./LoadingSkeleton"
import Overlay from "./Overlay"

import ProfileRegistration from "./ProfileRegistration"

import { useAuth } from "@/context/AuthContext"

export default function Displayer({}) {

    const router = useRouter()
    const {user, loading, error, AuthLoading, logout, userDoc, profileLoading} = useAuth()
    const [toggleAuthPopUp, setToggleAuthPopUP] = useState(false)   
    const [toggleProfileSetup, setToggleProfileSetup] = useState(false)   

    const [currentId, setCurrentId] = useState("")
    const [isVendor, setIsVendor] = useState(false)
    
    const redirectToAuth = (path) => {
        router.push(path)
    }

    
    useEffect(() => {

        const authStatusLoading = Boolean((loading || error || AuthLoading || profileLoading))

        if (authStatusLoading) return
        if (!user) {
            // Toggle Overlay
            setToggleAuthPopUP(true)
        }

        // If user profile not completed
        if (!userDoc) return
        if (userDoc.role === "user") {
            // Toggle Overlay
            setToggleProfileSetup(true)
            setCurrentId(userDoc.id)
        } else {
            setIsVendor(true)
        }

        // console.log(userDoc)
        
    },[user, loading, AuthLoading, userDoc])
    

    const sideMenus = [
    {name : "Micro Threads", iconUrl:"/icons8-threads-48.png"},
    {name : "Repositories", iconUrl:"/icons8-repository-48.png"},
    {name : "Ask AI", iconUrl:"/icons8-ai-64.png"},
    {name : "Stock & Supplies", iconUrl:"/icons8-stock-64.png"}
  ]

  const [activeMenu, setActiveMenu] = useState("Micro Threads")



    if (loading || error) return <LoadingSkeleton />

    return (
        <section className="h-screen w-screen flex flex-row bg-gray-50 relative">

            <Overlay 
            isOpen={toggleAuthPopUp}
            contentClassName=
            {"absolute bg-white w-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bd rounded-2xl"
            }
            >
                <AuthPopUp onSignIn={() => redirectToAuth("/login")} onSignUp={() => redirectToAuth("/register")}/>
            </Overlay>

            <Overlay 
            isOpen={toggleProfileSetup}
            contentClassName=
            {"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bd rounded-2xl"
            }
            >
                <ProfileRegistration uid={currentId} onClose={() => setToggleProfileSetup(false)}/>
            </Overlay>



            <Sidebar sideMenus={isVendor? sideMenus.slice(0,3) : sideMenus} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            {activeMenu !== "Ask AI" ? 
            <div className="w-285 h-full">         
                <Navbar userDoc={userDoc} authLoading={AuthLoading} profileLoading={profileLoading} logout={logout}/>
                {activeMenu === "Micro Threads" && <HomeDisplay />}
                {activeMenu === "Repositories" && <Repository />}
            </div> :
            <div className="w-285 h-full">         
                <Chatbot />
            </div>}

            {activeMenu === "Micro Threads" && 
            <button className="glow absolute w-20 h-20 bg-indigo-200 rounded-full
            flex flex-col justify-center items-center bottom-15 left-70 z-99"
            >
                <img src="/icons8-plus-48.png" alt=""/>
            </button>}

        </section>
    )
}


const AuthPopUp = ({onSignIn, onSignUp}) => {
    return (
        <div className="p-4 flex flex-col gap-5">
            <div>
                <h2 className="font-bold text-xl">TokoHub</h2>
            </div>
            <div className="flex flex-col items-center text-center gap-4 border-b-2 border-gray-300">
                <h1 className="">Please Log in or Sign Up your Account</h1>
                <p className="text-center">Help us authorize your account to access features and continue</p>
                <p className="mt-10 mb-4">Select a method</p>
            </div>
            <div className="flex flex-col relative gap-8">
                <button className="p-2 border-2 bg-indigo-300 text-white rounded-2xl"
                onClick={onSignIn}>Sign In</button>
            
                <span className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">or</span>
                <button className="p-2 border-2 text-indigo-300 rounded-2xl"
                 onClick={onSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

