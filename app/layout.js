import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Loader from "../components/loader";


export const metadata = {
  title: "Hemkanti",
  description: "Hemkanti Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {/* <Loader/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
