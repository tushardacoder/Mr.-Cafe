import { useEffect, useState } from "react";








export default function Categorydrinks() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch local JSON file
        fetch("/categorydrinks.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error loading products:", err));
    }, []);

    return (


        <div className="min-h-screen flex flex-col items-center bg-[#f6efe5] px-4 py-4">



            {/* Subheading */}
            <br />
            <br />

            <p className=" sm:text-lg md:text-xl text-2xl font-serif font-extrabold mr-290">
                Drinks
            </p>




            <br />
            <br />
            <br />

            {/* Cards */}
            <div className="flex flex-wrap gap-x-6 gap-y-20 justify-center ">
                {products.map((product) => (
                    <div className="relative w-72 rounded-2xl bg-white shadow-lg overflow-visible   transform transition duration-300 hover:scale-105 hover:shadow-2xl">

                        {/* Card background image */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-100 bg-[url('https://i.postimg.cc/zBdPg7dg/pngegg_(10)_2.png')] bg-cover bg-center opacity-20"
                        ></div>

                        {/* Product Image (Overflow) */}
                        <div className="relative flex justify-center -mt-8 z-10">
                            <img
                                src={product.image}
                                alt="Latte"
                                className="h-40 drop-shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative pt-15 pb-15 text-center">
                            <h3 className="text-xl font-serif text-gray-800">{product.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}