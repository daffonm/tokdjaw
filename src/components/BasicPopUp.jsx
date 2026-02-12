export default function BasicPopUp({children, title = "", onClose, onConfirm}) {
    return (
        <div className="p-4 flex flex-col gap-5">
            <div>
                <h2 className="font-bold text-xl">TokoHub</h2>
            </div>


            <div className="flex flex-col items-center text-center gap-4 border-b-2 border-gray-300 pb-20">
                <h1 className="">{title}</h1>
                {children}
                
            </div>


            <div className="flex flex-row justify-center items-center gap-8">
                <button className="p-2 border-2 text-indigo-300 w-40 rounded-2xl"
                onClick={onClose}
                >Cancel</button>
                <button className="p-2 border-2 bg-indigo-300 text-white w-40 rounded-2xl"
                onClick={onConfirm}
                >Confirm</button>
            </div>
        </div>
    )
}