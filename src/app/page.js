import Displayer from "@/components/Displayer"
import DbProvider from "@/context/DbContext";
import AuthProvider from "@/context/AuthContext";


export default function Home() {

  return (
    <section className="h-screen">

      <Displayer />
     
    </section>
    )
}

