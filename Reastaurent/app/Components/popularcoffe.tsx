
import { useEffect, useState } from "react";

import { Link } from "react-router";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";


export default function Popularcoffe() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch local JSON file
        fetch("/popularcoffe.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error loading products:", err));
    }, []);

    return (


        <section className="bg-[#f8f3eb] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-4xl font-serif text-center mb-12">
                    Our Most Popular Coffee
                </h2>
                <br />
                <br />
                <br />
                <br /><br />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-full sm:max-w-[360px] mx-auto 
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* CARD */}
                            <div className="relative bg-white rounded-2xl shadow-lg p-5 overflow-visible">

                                {/* Background pattern */}
                                <div
                                    className="absolute inset-0 bg-[url('https://i.postimg.cc/zBdPg7dg/pngegg_(10)_2.png')]
                     bg-cover bg-center opacity-100 rounded-2xl"
                                />

                                {/* TOP ROW */}
                                <div className="relative z-10 flex items-start justify-between">

                                    {/* Price + Rating */}
                                    <div>
                                        <span className="bg-[#b68a3a] text-white text-sm px-4 py-1 rounded-md border border-black">
                                            {item.price}
                                        </span>

                                        <div className="flex gap-1 text-[#b38b2e] mt-2">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="
              absolute
              -top-25
              right-4
              w-20  sm:w-24 lg:w-28
              drop-shadow-2xl
              z-20
            "
                                    />
                                </div>

                                {/* CENTER CONTENT */}
                                <div className="relative z-10 text-center mt-20 px-4">
                                    <h3 className="text-xl font-serif font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} >
                                    
                                    </p>
                                </div>

                                {/* BOTTOM ROW */}
                                <div className="relative z-10 flex items-center justify-between mt-6 flex-wrap gap-3">
                                    <span className="text-sm">
                                        <span className="text-[#b68a3a]">10%</span> Off for new Customer
                                    </span>

                                    <Link
                                        to="/cart"
                                        className="flex items-center gap-2 bg-[#b68a3a] text-white
                       px-4 py-1 rounded-md hover:bg-[#9e762f]
                       transition border border-black"
                                    >
                                        <FaShoppingCart /> Add
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>

    );


}