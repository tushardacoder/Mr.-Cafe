import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Contactus from "~/Components/Contactus";
import Quotes from "~/Components/quotes";
import { Outlet } from "react-router"
import Review from "~/Components/review";
import OfferModal from "~/Components/offermodel";
import { useEffect, useState } from "react";
import Hero from "~/Components/hero";
import Promo from "~/Components/promo";
import Readmore from "~/Components/readmore";
import Videoshow from "~/Components/videoshow";
import Info from "~/Components/info";

import Categorycoffe from "~/Components/categorycoffe";
import CategoryFood from "~/Components/categoryfood";
import Categorydrinks from "~/Components/categorydrinks";
import Popularcoffe from "~/Components/popularcoffe";
import Coffee from "~/Components/coffe";
import Popularfood from "~/Components/popularfood";


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 🔥 TEMP: clear this once to test
    localStorage.removeItem("offerShown");

    const hasShown = localStorage.getItem("offerShown");

    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("offerShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <>

      
      <Hero />
      <br />
      

      <Quotes />
      {showModal && <OfferModal onClose={() => setShowModal(false)} />}

      <Promo/>
      <Readmore/>
      
      <Popularcoffe/>
      <Popularfood/>
      <Categorycoffe/>
      
      <CategoryFood/>
      
      <Categorydrinks/>
     
      <Videoshow/>
      <Info/>
      
      <Review />
      <Contactus />




      <Outlet />

    </>
  );
}
