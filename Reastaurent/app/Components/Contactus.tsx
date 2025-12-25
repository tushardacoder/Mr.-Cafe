import { useEffect, useState } from "react";

export default function Contactus() {
 

  return (



<section className="bg-[#f7f1e8] py-14 sm:py-20">
  

      {/* Page Content */}
     
  <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-6 sm:mb-8">
      Want To Hear Coffee News From Us?
    </h2>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4 mb-5">
      <input
        type="email"
        placeholder="Your E-Mail Address"
        className="bg-white w-full sm:w-96 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c49a5a]"
      />

      <button className="w-full sm:w-auto bg-[#c49a5a] text-white px-6 py-3 rounded-md hover:bg-[#b0894f] transition">
        Subscribe
      </button>
    </div>

    {/* Checkbox */}
    <div className="flex items-start gap-2 md:ml-24 text-sm text-gray-600 max-w-xl mx-auto text-left sm:text-center">
      <input
        type="checkbox"
        className="mt-1 accent-[#c49a5a]"
      />
      <p className="leading-relaxed">
        Please Read The Coffee Address Personal Data Processing Policy
        <a href="#" className="text-[#c49a5a] underline ml-1">
          Here
        </a>.
      </p>
    </div>

  </div>

  
</section>




  );
}