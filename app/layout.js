
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import FloatingButton from "../components/FloatingButton";



export const metadata = {
  title: "Hemkanti",
  description: "Heal and Glow with our skincare clinic services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100"> 
      <Navbar/>
      {/* <Loader/> */}
     

        {children}
        <FloatingButton/>
        <Footer/>
      </body>
    </html>
  );
}
