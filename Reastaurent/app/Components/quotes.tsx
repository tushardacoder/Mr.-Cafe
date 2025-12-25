import { useEffect, useState } from "react";



export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [current, setCurrent] = useState(0);

    // Fetch JSON from public
    useEffect(() => {
        fetch("/quotes.JSON")
            .then((res) => res.json())
            .then((data) => setQuotes(data))
            .catch((err) => console.error(err));
    }, []);

    // Auto slider (runs AFTER quotes loaded)
    useEffect(() => {
        if (quotes.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [quotes]);

    if (quotes.length === 0) {
        return <p className="text-center">Loading...</p>;
    }

    return (

        <section className="bg-[#fafafa] py-16 px-4">
            <div className="max-w-4xl mx-auto text-center relative">

                {/* Quotes */}
                {quotes.map((quote, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0 absolute inset-0"
                            }`}
                    >
                        <div className="relative">
                            {/* <span className="text-5xl text-gray-300 absolute -left-6 -top-6 hidden sm:block">“</span> */}
                            {/* <span className="text-5xl font-bold text-gray-600 leading-none">“</span> */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-600"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-6H6.83A2.83 2.83 0 019.66 9.17 2.83 2.83 0 006.83 6zM17.17 6A5.17 5.17 0 0012 11.17V18h7v-6h-2.17A2.83 2.83 0 0119.66 9.17 2.83 2.83 0 0016.83 6z" />
                                </svg>
                            </div>

                           

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-800 leading-relaxed px-6"  dangerouslySetInnerHTML={{ __html: quote.text }}>
                                
                            </h2>

                            {/* <span className="text-5xl text-gray-300 absolute -right-6 -bottom-6 hidden sm:block">”</span> */}
                            <br />
                            <div className=" flex items-center justify-center w-16 h-16 rounded-lg absolute   -right-6 -bottom-6 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-600 scale-x-[-1]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-6H6.83A2.83 2.83 0 019.66 9.17 2.83 2.83 0 006.83 6zM17.17 6A5.17 5.17 0 0012 11.17V18h7v-6h-2.17A2.83 2.83 0 0119.66 9.17 2.83 2.83 0 0016.83 6z" />
                                </svg>
                            </div>

                        </div>

                        {/* Coffee Icon */}
                        <div className="flex justify-center my-6">
                            <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center">
                                <img src={quote.image} alt="quote image" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-6">
                    {quotes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition ${current === index ? "bg-[#c49a5a]" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </section>

    );

}