import { useState } from "react"

export default function Chatbot({}) {

    const [chatToggled, setChatToggled] = useState(false)
   
    return (
        <div className="flex flex-col gradient h-full">
            {/* Top */}
            <div className="flex flex-row justify-end py-6 px-4">
                <div className="flex flex-row gap-4 items-center">
                    <p>Username</p>
                    <div className="rounded-full bg-gray-300 w-10 h-10">         
                </div>
            </div>

            </div>

            {/* Chat Area */}
            <div className={`w-full h-full ${!chatToggled && "flex flex-col justify-center"}`}>

                {!chatToggled &&
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-4xl font-bold">Welcome to Ask AI</h3>
                        <p>Send a message to get started</p>
                    </div>
                }

            </div>

            {/* User Inputs */}
            <div className="flex flex-row justify-center pt-10 pb-20 gap-2 items-center">
                <div className="bg-white bd rounded-full w-100 pl-4 py-1">
                    <input className="w-full outline-0" 
                    type="text" name="ask" id="" placeholder="Ask a question"/>
                </div>
                <div className="w-8 h-8 bg-amber-200 rounded-full bd"></div>
            </div>
        </div>
    )
}