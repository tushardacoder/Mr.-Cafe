
import { Link } from "react-router";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";



export default function Coffee() {
    return (
        
       <div className="relative w-[360px] mx-auto  transform transition duration-300 hover:scale-105 hover:shadow-2xl">

            {/* CARD */}
            <div className="relative bg-white rounded-2xl shadow-lg p-5 overflow-visible  ">

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('https://i.postimg.cc/zBdPg7dg/pngegg_(10)_2.png')]
                                bg-cover bg-center opacity-100" />

                {/* TOP ROW */}
                <div className="relative z-10 flex items-start justify-between ">

                    {/* LEFT: Price + Rating */}
                    <div>
                        <span className="bg-[#b68a3a] text-white text-sm px-4 py-1 rounded-md   border border-black">
                            $50
                        </span>

                      
                        {/* <div className="flex justify-center mb-2 text-[#b38b2e]">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div> */}
                    </div>

                    {/* SPACE RESERVED FOR IMAGE */}
                    <div className="w-24" />
                </div>

                {/* CENTER CONTENT */}
                <div className="relative z-10 text-center mt-6 px-4">
                    <h3 className="text-xl font-serif font-semibold">
                        Skinny Latte
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Espresso, Milk, Ice and Choice of  <br />Flavor(s) · 20oz
                    </p>
                </div>

                {/* BOTTOM ROW */}
                <div className="relative z-10 flex items-center justify-between mt-6">
                    <span className="text-sm ">
                        <span className="text-[#b68a3a]">10%</span> Off for new Customer
                    </span>
                    

                    <Link
                        to="/cart"
                        className="flex items-center gap-2 bg-[#b68a3a] text-white
                                   px-4 py-1 rounded-md hover:bg-[#9e762f] transition border border-black"
                    >
                         <FaShoppingCart /> Add 
                    </Link>
                </div>
            </div>

            {/* IMAGE — OUTSIDE CARD (RIGHT) */}
            <div className="absolute left-50 top-2 -translate-y-1/2 z-20">
                <img
                    src="https://i.postimg.cc/6Q5sTBzH/pngegg-(20).png"
                    alt="Skinny Latte"
                    className="w-25 drop-shadow-2xl "
                />
            </div>
        </div>
    );


                





}