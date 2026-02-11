import Displayer from "@/components/Displayer"
import DbProvider from "@/context/DbContext";
import AuthProvider from "@/context/AuthContext";
import {PDFProvider} from "@/context/PDFContext";

export default function Home() {

  return (
    <section className="h-screen">

      <DbProvider>
        <AuthProvider>
          <PDFProvider>

            <Displayer />

          </PDFProvider>
        </AuthProvider>
       </DbProvider>

    </section>
    )
}

