
import "./globals.css";

import DbProvider from "@/context/DbContext";
import AuthProvider from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <DbProvider>
              <AuthProvider>
   
      
                    <body>{children}</body>
      
     
              </AuthProvider>
             </DbProvider>
      
    </html>
  );
}
