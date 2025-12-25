import { Outlet } from "react-router"
import Footer from "~/Components/footer";


import Header from "~/Components/header";
import Navbar from "~/Components/navbar";


export default function Mainlayouts() {

       return (

              <>
                    <Header/>
                    
                    <Navbar/>
                    <Outlet />
                    <Footer/>
                   
                  


                     

              </>










       );


}