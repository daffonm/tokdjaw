"use client"

import TextForm from "@/components/sub/TextForm"
import ArrowButton, {ArrowIcon} from "@/components/sub/ArrowButton"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { useAuth } from "@/context/AuthContext"

export default function Login({}) {
    const router = useRouter()
    const {user, loading, error, login} = useAuth()

    // auto redirect when user logged
    useEffect(() => {
    if (loading || error) return;
    if (!user) return;
        router.replace("/");
    }, [user, loading, router]);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill all the fields, are you writing a Testing Plan?")
            return
        };
        if (password.length <= 7) {
            alert("Password must be at least 8 characters")
            return
        }
        try {
            await login(email, password)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div className="flex flex-row h-screen">
            <div className="p-8 bd h-full w-3/4">
                <button className="flex flex-row gap-4 items-center">
                    <ArrowIcon cls="w-5 h-5"/>
                    <h2 className="text-xl">Login</h2>
                </button>

                <div className="flex flex-col mx-20 gap-10 mt-20">
                    <h1>Log into your Account</h1>
                    <div className="flex flex-col gap-12">
                        <TextForm title={"Email"} type="email" w={"w-full"} placeholder={"Enter email"} handleInputValue={(e) => setEmail(e.target.value)}/>
                        <TextForm title={"Password"} type="password" w={"w-full"} placeholder={"Enter password"} handleInputValue={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-4 mt-40 items-center">
                        <button 
                        onClick={handleLogin}
                        className="p-2 border-2 bg-indigo-300 text-white rounded-2xl w-50">Sign Up</button>
                        <p>Don't have an Account? <button onClick={() => router.push("/register")} className="text-indigo-300">Click Here</button> to Sign Up</p>
                    </div>

                </div>
            </div>

            <div className="w-full opacity-40">
                <img src="/authbg-2.jpg" alt=""  className="w-full h-full"/>
            </div>
        </div>
    )
}