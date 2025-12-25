import { useEffect, useState } from "react";








export default function Categorycoffe() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch local JSON file
        fetch("/categorycoffe.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error loading products:", err));
    }, []);

    return (


        <div className="min-h-screen flex flex-col items-center bg-[#f6efe5] px-4 py-4">

            {/* Heading */}
            <h2 className="text-4xl font-serif text-center mb-4">
                Our Category
            </h2>
            <br />
            <br />
            <br />
            <br />

            {/* Subheading */}

            <p className="text-base sm:text-lg md:text-xl  font-serif font-extrabold mr-290">
                Coffee
            </p>






            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Cards */}
            <div className="flex flex-wrap gap-x-6 gap-y-30 justify-center">
                {products.map((product) => (
                    <div className="relative w-72 rounded-2xl bg-white shadow-lg overflow-visible   transform transition duration-300 hover:scale-105 hover:shadow-2xl">

                        {/* Card background image */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-100 bg-[url('https://i.postimg.cc/zBdPg7dg/pngegg_(10)_2.png')] bg-cover bg-center opacity-20"
                        ></div>

                        {/* Product Image (Overflow) */}
                        <div className="relative flex justify-center -mt-25 z-10">
                            <img
                                src={product.image}
                                alt="Latte"
                                className="w-40 drop-shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative pt-6 pb-6 text-center">
                            <h3 className="text-xl font-serif text-gray-800">{product.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}