export default function HomeDisplay({}) {
    return (
        <div className = "flex flex-col w-full  h-158 overflow-y-scroll ">

            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Trending Discussion</h1>

                {/* Container */}
                <div className="flex flex-row w-full gap-8 overflow-x-scroll p-4">

                    <ThreadsBubble />
                    <ThreadsBubble />
                    <ThreadsBubble />
                    <ThreadsBubble />
                    <ThreadsBubble />
                
                
                </div>


            </div>

            <div className="p-4 pl-8 flex flex-col gap-4">
                <h1>Recent Topics</h1>

                {/* Container */}
                <div className="">

                    {/* Bubbles */}
                    <div className="bd w-full h-100 rounded-2xl flex flex-col">

                        <div className="flex flex-row justify-between px-5 py-2 items-center">

                            <div className="flex flex-row items-center gap-4">

                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <h2>User</h2>
                                    <h2>10/12/2012</h2>
                                </div>

                            </div>

                            <div>
                                Icon
                            </div>
                        </div>


                        <div>

                        </div>
                    
                    </div>

                </div>

            </div>


        </div>
    )
}

function ThreadsBubble({}) {
 return (
    
        <div className="bd w-100 h-80 rounded-2xl flex flex-col shrink-0">

            <div className="flex flex-row w-full justify-between px-5 py-2 items-center">

                <div className="flex flex-row w-full items-center gap-4">

                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <h2>User</h2>
                        <p className="text-sm text-gray-400">10/12/2012</p>
                    </div>

                </div>

                <div>
                    Icon
                </div>
            </div>


            <div>

            </div>
        
        </div>
        
 )
}
            

    