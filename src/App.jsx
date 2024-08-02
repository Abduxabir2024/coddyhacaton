import { Route, Routes } from "react-router-dom";
import Abaut from "./page/Abduxabir/abaut";


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/abaut"  element={<Abaut/>} />
    </Routes>
    </>
  )
}
