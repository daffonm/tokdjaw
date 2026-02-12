export default function TextForm({title, type = "text", w = "full", placeholder, handleInputValue}) {
    return (
        <div className={`${w} flex flex-col relative bd border-2 border-indigo-300 rounded-sm`}>
            <p className="absolute -top-3 left-5 bg-gray-50 px-1 text-sm text-indigo-300">{title}</p>
            <input className="w-full outline-0 p-2 text-sm"
            type={type} name={title} id={title} placeholder={placeholder || ""} onChange={handleInputValue}/>
        </div>
    )
}