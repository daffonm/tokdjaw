const colors = [
    "bg-pink-200",
    "bg-yellow-200",
    "bg-green-200,",
    "bg-blue-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-indigo-200",
    "bg-gray-200",
    "bg-red-200",
    "bg-lime-200",
    
]

export default function Repository({}) {


    return (
        <div className="flex flex-col w-full  h-158 overflow-y-scroll">
            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Folder Groups</h1>

                <div className="flex flex-row w-full gap-8 overflow-x-scroll p-4">
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                    <Folder />
                
                </div>


            </div>
            <div className="p-4 pl-8 flex flex-col w-full gap-4">
                <h1 className="pl-4">Stored Documents</h1>

                <div className="flex flex-col w-full gap-0.5 ml-4 bg-gray-200">
                   <div className="flex flex-row bg-gray-50 py-1">
                        <p className="w-80 text-sm text-gray-400">Name</p>
                        <p className="w-40 text-sm text-gray-400">Type</p>
                        <p className="w-50 text-sm text-gray-400">Mentors</p>
                        <p className="w-40 text-sm text-gray-400">Category</p>
                        <p className="w-30 text-sm text-gray-400">AI</p>
                        <p className="w-30 text-sm text-gray-400">Status</p>
                    </div>
                <div className="flex flex-col w-full gap-2 bg-gray-100 py-1">
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />
                    <DocList />

                </div>
                </div>
                

            </div>
        </div>
    )
}

function Folder({}) {
    const random = Math.floor(Math.random() * colors.length)
    return (
        <button className="bd-2 rounded-xl px-8 pr-12 py-8 w-50 h-50 flex flex-col justify-between gap-8 shrink-0">
            <div>
                <div className={`w-8 h-8 rounded-full ${colors[random]}`}>
                    <img src="/icons8-folder-48.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h2>FolderName</h2>
                <p className="text-xs text-gray-400">13 Documents</p>
            </div>
        </button>
    )
}

import React from "react";

function DocList() {
    return (
        <button className="flex flex-row bg-white py-2 text-start">
            <p className="w-80 overflow-hidden text-ellipsis ">SOP Kerja 2024</p>
            <p className="w-40 overflow-hidden text-ellipsis ">PDF</p>
            <p className="w-50 overflow-hidden text-ellipsis ">John, Arlot</p>
            <p className="w-40 overflow-hidden text-ellipsis ">Table Manner</p>
            <p className="w-30 overflow-hidden text-ellipsis ">Yes</p>
            <p className="w-30 overflow-hidden text-ellipsis ">Valid</p>
        </button>
    )
}

function CourseTable() {
  const courses = [
    {
      name: "O que UI Design",
      duration: "18:42",
      mentors: "Lucas, Pedro",
      courses: "UI Start, +3",
      status: "Processando",
      progress: 59,
    },
    {
      name: "UX Design e sua Importância",
      duration: "25:38",
      mentors: "Lucas",
      courses: "UI Start",
      status: "Rascunho",
      progress: null,
    },
    {
      name: "Conhecendo a sua Própria Identidade",
      duration: "32:57",
      mentors: "Paulo Cuenca",
      courses: "Marketing de Influência",
      status: "Finalizado",
      progress: 100,
    },
    {
      name: "Tipografia Básica em UI",
      duration: "25:38",
      mentors: "Tiago",
      courses: "UI Start",
      status: "Finalizado",
      progress: 100,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-300  rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-white border-b">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Mentors</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">AI</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="m">
              <td className="px-6 py-4">{course.name}</td>
              <td className="px-6 py-4">{course.duration}</td>
              <td className="px-6 py-4">{course.mentors}</td>
              <td className="px-6 py-4">{course.courses}</td>
              <td className="px-6 py-4 flex gap-4">
                {course.progress !== null && (
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">{course.progress}%</span>
                  </div>
                )}
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
                <td className="px-6 py-4">
                <span
                  className={`${
                    course.status === "Processando"
                      ? "bg-yellow-300 text-yellow-800"
                      : course.status === "Finalizado"
                      ? "bg-green-300 text-green-800"
                      : "bg-gray-300 text-gray-800"
                  } px-3 py-1 rounded-full`}
                >
                  {course.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
