import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

 
 export default function Navbar(){

    return(
        <>
        <div className="flex items-center justify-between mx-20">
          
          <div className="logo flex items-center ">
            <img src="https://img.freepik.com/premium-vector/gw-logo_745848-61.jpg" alt="" className="w-28" />
            <h1>GRIDWORK</h1>
          </div>
          <div className="ul flex items-center gap-10">
            <Link className="hover:text-blue-800 hover:font-bold" to={"/home"}>Home</Link>
            <Link className="hover:text-blue-800 hover:font-bold" to={"/Projects"}>RegiterUser</Link>
            <Link className="hover:text-blue-800 hover:font-bold" to={"/About"}>About</Link>
            <Link className="hover:text-blue-800 hover:font-bold" to={"/Login"}>Log In</Link>
          </div>
              <Button>Login</Button>
            </div>
        </>
    )
 }