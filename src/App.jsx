import { Route, Routes } from "react-router-dom";
import Abaut from "./page/Abduxabir/abaut";
import Homeg from "./page/Abdulaziz/abdulaziz"
import Navbar from "./campanent/navbar/navbar";
import Login from "./page/Shoxzamon/shoxzamon";
import { Footer } from "./campanent/footer/footer";
import ContactUser from "./page/jashid/jamshid";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/About"  element={<Abaut/>} />
      <Route path="/home"  element={<Homeg/>} />
      <Route path="/RegisteUser"  element={<ContactUser/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    <Footer />
    </>
  )
}
