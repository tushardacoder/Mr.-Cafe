import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";



export default function Review() {

    const [reviews, setReviews] = useState([]);
    const [current, setCurrent] = useState(0);

    // Fetch JSON from public
    useEffect(() => {
        fetch("/testimonial.JSON")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error(err));
    }, []);

    // Auto slider (runs AFTER quotes loaded)
    useEffect(() => {
        if (reviews.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [reviews]);

    if (reviews.length === 0) {
        return <p className="text-center">Loading...</p>;
    }


    return (


        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-12 text-center sm:text-left">
                What Our Customers Say
            </h2>

            {/* Slider */}
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10"
                        >
                            {/* Left content */}
                            <div className="max-w-xl text-center md:text-left">
                                <p className="text-base sm:text-lg font-serif text-gray-800 relative">
                                    <div className="relative max-w-3xl mx-auto px-4 py-8">
                                        {/* Opening quote */}
                                        <span className="absolute top-0 left-0 text-5xl sm:text-6xl md:text-7xl font-bold text-gray-400">
                                            “
                                        </span>

                                        {/* Quote text */}
                                        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-4 md:mt-6">
                                            {item.text}
                                        </p>

                                        {/* Closing quote */}
                                        <span className="absolute bottom-0 right-0 text-5xl sm:text-6xl md:text-7xl font-bold text-gray-400">
                                            ”
                                        </span>
                                    </div>

                                </p>

                                <div className="mt-6">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.rating}</p>
                                </div>
                            </div>

                            {/* Right image */}
                            <img
                                src={item.image}
                                alt="Customer"
                                className="w-40 sm:w-40 md:w-48 lg:w-56 mt-6 md:mt-0 rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots & Verified */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-60 mt-10 justify-start">
                {/* Verified Customer + Social Icons */}
                <div className="flex items-center gap-4 text-gray-600 flex-wrap justify-center md:justify-start">
                    <div className="flex items-center gap-2 font-medium">
                        <FaCheckCircle className="w-4 h-4" />
                        Verified Customer
                    </div>
                    <Link to="/facebook" className="hover:text-blue-600"><FaFacebookF size={16} /></Link>
                    <Link to="/twitter" className="hover:text-sky-500"><FaTwitter size={16} /></Link>
                    <Link to="/instagram" className="hover:text-pink-500"><FaInstagram size={16} /></Link>
                </div>

                {/* Slider Dots */}
                <div className="flex justify-center gap-3 mt-4 md:mt-0">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition ${current === index ? "bg-[#c49a5a]" : "bg-gray-300"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>


    );
}
