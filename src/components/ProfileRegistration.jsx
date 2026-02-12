import { useDb } from "@/context/DbContext"
import { useState, useCallback } from "react"

import TextForm from "./sub/TextForm"

export default function ProfileRegistration({uid, onClose}) {

    const {db, updateDoc, serverTimestamp} = useDb()

    const userId = uid

    const patchUser = useCallback(async (patch) => {
    if (!userId) return;

    try {
    //  updateDoc(collection, id, data)
      await updateDoc("Users", userId, {
        ...patch,
        updatedAt: serverTimestamp(),
      });

    } catch (e) {
      console.error("patchBooking error:", e);
   
    }
  }, [db]);

  const cityBranches = [
    {
        city: "Surabaya",
        branchAddress: [{address: "Jl. Tunjungan no 45, Genteng"}]
    },
    {
        city: "Bandung",
        branchAddress: [
            {
                address: "Jl. Teuku Umar No.5, Lebakgede, Coblong"
            },
            {
                address: "Jl. Cihapit No.14, Cihapit, Bandung Wetan"
            },
            {
                address: "Jl. Braga No.81, Braga, Sumur Bandung"
            },
            {
                address: "Jl. Bukit Pakar Timur No.7, Ciburial, Kec. Cimenyan"
            },
        ]
    },
    {
        city: "Jakarta",
        branchAddress: [
            {
                address: "Jl. H. Agus Salim No.60, RT.8/RW.4, Dukuh Atas, Gondangdia, Menteng"
            },
            {
                address: "Jl. Melawai 5 No.3, Melawai, Kby. Baru"
            },
        ]
    },
  ]

  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")

  const [role, setRole] = useState(null)

  const [branchCity, setBranchCity] = useState(null)
  const [branchAddress, setBranchAddress] = useState(null)

  const [supplierName, setSupplierName] = useState(null)
  const [supplierAddress, setSupplierAddress] = useState(null)

  const [errorText, setErrorText] = useState(null)

  const canProceed = (phs) => {

    switch (phs) {
        case 1:
            if (!firstName || !lastName || !phone) {
                setErrorText("*Please fill all the fields")
                return false
            }
            break;
        case 2:
            if (!role) {
                setErrorText("*Please select a role")
                return false
            }
            break;
        case 3:
            if (role === "employee") {
                if (!branchCity || !branchAddress) {
                    setErrorText("*Please select a branch")
                    return false
                }
            } else if (role === "supplier") {
                if (!supplierName || address) {
                    setErrorText("*Please fill the fields")
                    return false
                }
            }
            break
            default:
                setErrorText("Unknown Error")
            break;
    }

    setErrorText(null)
    return true
  }
  
  const [phase, setPhase] = useState(0)
  const handlePhaseChange = (action) => {
    if (phase === 4) onClose()
    if (action === "next") {
        if (!canProceed(phase)) return
            if (phase === 3) {
                const patch = {
                    firstName,
                    lastName,
                    fullName : firstName + " " + lastName,
                    phone,
                    role,
                }
                if (role === "employee") {
                    patch.branchCity = branchCity
                    patch.branchAddress = branchAddress
                } else if (role === "supplier") {
                    patch.supplierName = supplierName
                    patch.supplierAddress = supplierAddress
                }

                patchUser(patch)
                
            
            } else {
                setPhase(prev => prev + 1)
            }

    } else {
        phase > 0 && setPhase(prev => prev - 1)
    }

  }



  return (
   <div className="p-4 bg-white w-200 flex flex-col gap-5 rounded-xl">
        <div>
            <h2 className="font-bold text-xl">TokoHub</h2>
        </div>

        {phase === 0 && 
            <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                <h1 className="text-start">Account Verification Required</h1>
                <p className="text-start">To get the most out of your experience, please complete your profile information. This helps us verify your access and ensure you're authorized to use certain features.</p>
                <p className="mt-10 mb-4"></p>
            </div>
        }

        {phase === 1 && 
            <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                <h1 className="text-start">Complete your Profile</h1>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row gap-10">
                        <TextForm title={"First Name"} type="text" w={"w-70"} placeholder={"Enter first name"} handleInputValue={(e) => setFirstName(e.target.value)}/>
                        <TextForm title={"Last Name"} type="text" w={"w-70"} placeholder={"Enter last name"} handleInputValue={(e) => setLastName(e.target.value)}/>

                    </div>
                    <TextForm title={"Phone"} type="text" w={"w-70"} placeholder={"Enter phone number"} handleInputValue={(e) => setPhone(e.target.value)}/>

                </div>
                <p className="mt-10 mb-4"></p>
            </div>
        }

        {phase === 2 && 
            <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                <h1 className="text-start">Choose Your Role</h1>
                <div className="flex flex-row gap-10 justify-center">
                    <button className={`p-4 bg-red-400 rounded-3xl w-40 h-40 flex flex-col items-center justify-center gap-2
                    ${role === "employee" ? "bg-white border-red-400 border-2 text-red-400" : "bd-3 text-white"} `}
                    onClick={() => setRole("employee")}
                    >
                        <img 
                        className=""
                        src={role === "employee"? "/icons8-barista-64 (1).png" : "/icons8-barista-64.png"} alt="employee" />
                        <p>Employee</p>
                    </button>
                    <button className={`p-4 bg-green-400 rounded-3xl w-40 h-40 flex flex-col items-center justify-center gap-2
                    ${role === "supplier" ? "bg-white border-green-400 border-2 text-green-400" : "bd-3 text-white"} `}
                    onClick={() => setRole("supplier")}
                    >
                        <img 
                        className=""
                        src={role === "supplier"? "/icons8-supplier-64.png" : "/icons8-supplier-64 (1).png"} alt="employee" />
                        <p>Supplier / Vendor</p>
                    </button>

                </div>
                <p className="text-center">{`I am ${role === "employee" ? "an employee" : "a supplier"} of Kopi Toko Djawa`}</p>
                <p className="mt-6 mb-4"></p>
            </div>
        }

        {phase === 3 && (
            role === "employee"?
                <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                    <h1 className="text-start">Branch Location</h1>
                    <p>Please select your branch city and address</p>
                    <div className="flex flex-row gap-14">
                        <select className="p-2"
                        onChange={(e) => setBranchCity(e.target.value)}
                        value={branchCity || ""}
                        >
                            <option className="p-2" value={""}>Select City</option>
                            {cityBranches.map((city, index) => {
                                return <option key={index} value={city.city}>{city.city}</option>
                            })}
                        </select>
                        {branchCity && 
                            <select className="p-2"
                            onChange={(e) => setBranchAddress(e.target.value)}
                            value={branchAddress ||""}
                            >
                                <option value={""}>Select Address</option>
                                {cityBranches.find(city => city.city === branchCity).branchAddress.map((address, index) => {
                                    return <option key={index} value={address.address}>{address.address}</option>
                                })}
                            </select>}
                    </div>
                    <p className="mt-10 mb-4"></p>
                </div> :  
                    <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                    <h1 className="text-start">Company Information</h1>
                    <p>Enter your company name and address</p>
                    <div className="flex flex-row gap-14">
                          
                        <div className="flex flex-row gap-10">
                        <TextForm title={"Company Name"} type="text" w={"w-70"} placeholder={"Enter company name"} handleInputValue={(e) => setSupplierName(e.target.value)}/>
                        <TextForm title={"Address Name"} type="text" w={"w-70"} placeholder={"Enter company address"} handleInputValue={(e) => setSupplierAddress(e.target.value)}/>

                    </div>

                    </div>
                    <p className="mt-10 mb-4"></p>
                </div> 

        )}

        {phase === 4 && 
            <div className="flex flex-col gap-8 p-4 border-b-2 border-gray-300">
                <h1 className="text-start">Account Verification Complete</h1>
                <p className="text-start">Thankyou for your registration! you may now access our TokoDjawa Hub App based on your role.</p>
                <p className="mt-10 mb-4"></p>
            </div>
        }


        <div className="flex flex-row relative gap-8 justify-end items-center">
            {errorText && <p className="text-red-400 font-bold">{errorText || "Unknown Error"}</p>}
            {phase > 0 && 
                <button className="p-2 border-2 border-indigo-300 text-indigo-300 rounded-2xl w-40"
                onClick={() => handlePhaseChange("back")}
                >{"Back"}</button>
            }
            <button className="p-2 border-2 bg-indigo-300 text-white rounded-2xl w-40"
            onClick={() => handlePhaseChange("next")}
            >{phase === 3 ? "Submit" : "Next"}</button>

        </div>

    </div>       
  )
}