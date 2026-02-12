import { useState } from "react";

export default function Chatbot() {
    const [chatToggled, setChatToggled] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        setChatToggled(true);
        if (inputText.trim() !== "") {
            setMessages([...messages, { sender: "user", text: inputText }]);
            setInputText("");
            // You can add an AI response here
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "ai", text: "This is a response." },
            ]);
        }
    };

    return (
        <div className="flex flex-col gradient h-full">
            {/* Top */}
            <div className="flex flex-row justify-end py-6 px-4">
                <div className="flex flex-row gap-4 items-center">
                    <p>Username</p>
                    <div className="rounded-full bg-gray-300 w-10 h-10"></div>
                </div>
            </div>

            {/* Chat Area */}
            <div
                className={`w-full h-full overflow-y-auto px-10 ${
                    !chatToggled && "flex flex-col justify-center"
                }`}
            >
                {!chatToggled && (
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-4xl font-bold">Welcome to Ask AI</h3>
                        <p>Send a message to get started</p>
                    </div>
                )}

                {/* Display messages */}
                {messages.length > 0 && (
                    <div className="w-full flex flex-col gap-4 p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    message.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`${
                                        message.sender === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                    } p-3 rounded-lg max-w-xs`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* User Inputs */}
            <div className="flex flex-row justify-center pt-10 pb-20 gap-2 items-center">
                <div className="bg-white rounded-full w-3/4 flex items-center py-1 px-4">
                    <input
                        className="w-full outline-none"
                        type="text"
                        name="ask"
                        id=""
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Ask a question"
                    />
                    <div
                        className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center cursor-pointer"
                        onClick={handleSendMessage}
                    >
                        <span className="text-white font-bold">➤</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
