"use client"

import TextForm from "@/components/sub/TextForm"
import ArrowButton, {ArrowIcon} from "@/components/sub/ArrowButton"

import { useRouter } from "next/navigation"

import { useState, useEffect } from "react"
import { useAuth } from "@/context/AuthContext"


export default function Register({}) {
    const router = useRouter()

    const {user, loading, error, register} = useAuth()

    // auto redirect when user logged
    useEffect(() => {
    if (loading || error) return;
    if (!user) return;
        router.replace("/");
    }, [user, loading, router]);

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill all the fields, are you writing a Testing Plan?")
            return
        };
        if (password.length <= 7) {
            alert("Password must be at least 8 characters")
            return
        }

        if (confirmPassword !== password) {
            alert("Looks like your password doesn't match..")
            return
        }
        
        try {
            await register({email, password, username})
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="p-8 bd h-full w-3/4">
                <button className="flex flex-row gap-4 items-center">
                    <ArrowIcon cls="w-5 h-5"/>
                    <h2 className="text-xl">Register</h2>
                </button>

                <div className="flex flex-col mx-20 gap-10 mt-20">
                    <h1>Set up your Account</h1>
                    <div className="flex flex-col gap-12">
                        <TextForm title={"Username"} w={"w-full"} placeholder={"Enter username"} handleInputValue={(e) => setUsername(e.target.value)}/>
                        <TextForm title={"Email"} w={"w-full"} type="email" placeholder={"Enter email"} handleInputValue={(e) => setEmail(e.target.value)}/>
                        <TextForm title={"Password"} type="password" w={"w-full"} placeholder={"Enter password"} handleInputValue={(e) => setPassword(e.target.value)}/>
                        <TextForm title={"Confirm Password"} type="password" w={"w-full"} placeholder={"Confirm your password"} handleInputValue={(e) => setConfirmPassword(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-4 mt-2 items-center">
                        <button className="p-2 border-2 bg-indigo-300 text-white rounded-2xl w-50" onClick={handleRegister}>Sign Up</button>
                        <p>Already have an Account? <button onClick={() => router.push("/login")} className="text-indigo-300">Click Here</button> to Sign In</p>
                    </div>

                </div>
            </div>

            <div className="w-full opacity-40">
                <img src="/authbg-2.jpg" alt=""  className="w-full h-full"/>
            </div>
        </div>
    )
}