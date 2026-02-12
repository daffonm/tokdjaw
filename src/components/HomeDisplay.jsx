import { samplePosts } from "@/lib/samplePost"
import { useState } from "react"

export default function HomeDisplay({}) {


    const trendingPosts = samplePosts.filter(post => post.up_votes > 5)

    return (
        <div className = "flex flex-col w-full  h-158 overflow-y-scroll ">

            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Trending Discussion</h1>

                {/* Container */}
                <div className="flex flex-row w-full gap-8 overflow-x-scroll p-4">

                    {samplePosts.map((post, id) => <ThreadsBubble post={post} key={id} />)}
                
                
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

function ThreadsBubble({post}) {

    const [like, setLike] = useState(post.up_votes || 0)
    const [dislike, setDislike] = useState(post.down_votes || 0)

    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const handleLike = (cons = liked) => {
        if (liked) {
            setLike(like - 1)
            setLiked(false)
        } else {
            setLike(like + 1)
            setLiked(true)
        }
        
        if (disliked) {
            setDislike(dislike - 1)
            setDisliked(false)
        }
    
    }

    const handleDislike = (cons = liked) => {
        if (disliked) {
            setDislike(dislike - 1)
            setDisliked(false)
        } else {
            setDislike(dislike + 1)
            setDisliked(true)
        }
       
        if (liked) {
            setLike(like - 1)
            setLiked(false)
        }
    
    }


 return (
    
        <div className="bd w-100 h-80 rounded-2xl flex flex-col shrink-0 relative ">

            <div className="flex flex-row w-full justify-between px-5 py-2 items-center">

                <div className="flex flex-row w-full items-center gap-4">

                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <h2>{post.username}</h2>
                        <p className="text-sm text-gray-400">{post.updated}</p>
                    </div>

                </div>

                <div>
                
                </div>
            </div>


            <div className="p-4 flex flex-col wrap-break-word relative">
                <h2 className="font-bold text-xl">{post.title}</h2>
                <p className="h-42 overflow-clip">{post.text}</p>
            </div>

                <div className="absolute bottom-0 left-0 flex flex-row justify-between w-full px-4 py-2 bg-gray-100 bd">
                    <div className="flex flex-row gap-4">
                        <button onClick={handleLike}
                        className={`flex flex-row gap-2 rounded-2xl items-center px-2
                        ${liked? "bg-blue-400" : "bg-gray-200"}
                        `}>
                            <img className="w-5 h-4" src={liked? "/icons/icons8-up-30 (1).png" : "/icons/icons8-up-30.png"} alt=""/>
                            <p className={`text-center text-sm ${liked && "text-white"}`}>{like}</p>
                        </button>
                        <button onClick={handleDislike}
                        className={`flex flex-row gap-2 rounded-2xl items-center px-2
                        ${disliked? "bg-red-400" : "bg-gray-200"}
                        `}>
                            <img className="w-5 h-4" src={disliked? "/icons/icons8-down-30 (1).png" : "/icons/icons8-down-30.png"} alt=""/>
                            <p className={`text-center text-sm ${disliked && "text-white"}`}>{dislike}</p>
                        </button>
                    </div>
                    <button className="text-blue-500 underline">Read More</button>
                </div>
        
        </div>
        
 )
}
            

    