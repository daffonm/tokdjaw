export default function Navbar({}) {
    return (
        <div className="flex flex-row justify-between w-full p-4 items-center mt-2">

            <div className="bg-gray-200 rounded-2xl w-80 h-8 px-3 flex flex-row items-center">
                <input 
                className="flex flex-row justify-center items-center w-full outline-0"
                placeholder="Search..."
                type="text" name="search" id="s" />
            </div>

            <div className="flex flex-row gap-4 items-center">
                <p>Username</p>
                <div className="rounded-full bg-gray-300 w-10 h-10"></div>
            </div>
        </div>
    )
}