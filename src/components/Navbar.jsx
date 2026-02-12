import LoadingSkeleton from "./LoadingSkeleton"

import Overlay from "./Overlay"

import { useState } from "react"
import { ArrowIcon } from "./sub/ArrowButton"

export default function Navbar({userDoc, authLoading, profileLoading, logout}) {

    const [toggleProfile, setToggleProfile] = useState(false)
    const handleLogout = () => {
        setToggleProfile(false)
        logout()
    }

    return (
        <div className="flex flex-row justify-between w-full p-4 items-center mt-2">

            <Overlay 
            isOpen ={toggleProfile}
            onClose={() => setToggleProfile(false)}
            contentClassName="absolute top-0 right-0 h-screen w-100 bg-white"
            >
                <ProfileMenu userDoc={userDoc} authLoading={authLoading} profileLoading={profileLoading} onClose={() => setToggleProfile(false)} logout={handleLogout}/>
            </Overlay>

            <div className="bg-gray-200 rounded-2xl w-80 h-8 px-3 flex flex-row items-center">
                <input 
                className="flex flex-row justify-center items-center w-full outline-0"
                placeholder="Search..."
                type="text" name="search" id="s" />
            </div>

          
          { userDoc && !authLoading && !profileLoading ?
            <div className="flex flex-row gap-4 items-center">
                <p>{"Hi, " + userDoc.username}</p>
                <button onClick={() => setToggleProfile(true)} className="rounded-full bg-gray-300 w-10 h-10"></button>
            </div> :

            <LoadingSkeleton />
          }
        </div>
    )
}

function ProfileMenu({userDoc, authLoading, profileLoading, onClose, logout}) {
    if (!userDoc || authLoading || profileLoading) return <LoadingSkeleton />
    return (
        <div className="h-full">
            <button onClick={onClose} className="flex flex-row gap-2 items-center p-4"><ArrowIcon cls="w-5 h-5" />Profile</button>

            <div className="flex flex-col justify-between h-11/12 p-8">
                <div className="flex flex-col items-center">
                    <div className="rounded-full bg-gray-300 w-15 h-15"></div>
                    <h2 className="font-bold mt-2">{userDoc.username}</h2>
                    <p>{userDoc.email}</p>
                </div>
                <div>
                    <button
                    onClick={logout}
                    >Log Out</button>
                </div>
            </div>

        </div>
    )
}