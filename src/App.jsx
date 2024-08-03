import { Route, Routes } from "react-router-dom";
import Abaut from "./page/Abduxabir/abaut";
import Homeg from "./page/Abdulaziz/abdulaziz"
import Navbar from "./campanent/navbar/navbar";
import Projects from "./page/jashid/jamshid";
import Login from "./page/Shoxzamon/shoxzamon";
import Footerr from "./campanent/footer/footer";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/About"  element={<Abaut/>} />
      <Route path="/home"  element={<Homeg/>} />
      <Route path="/Projects"  element={<Projects/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    <Footerr />
    </>
  )
}
