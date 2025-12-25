

export default function Hero() {


    return (
        <section className="bg-[#f7f1e8] min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1  md:grid-cols-2 gap-12 items-center lg:mr-62">
                  
                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <p className="text-sm tracking-wide text-gray-600 mb-3">
                        A Best Café House
                    </p>

                    <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
                        Start Your Day With <br className="hidden sm:block" /> Morning Coffee
                    </h1>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-[#c49a5a] mb-6">
                        <span>Colombian Andean Coffee</span>
                        <span>Ethiopian Acidic Coffee</span>
                    </div>

                    <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-8">
                        We love the idea of indulging in your health, and every item on our
                        menu is full of lush, organic ingredients, bright flavor and
                        beautiful color.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="bg-[#c49a5a] hover:bg-[#b0894f] text-white px-6 py-3 rounded-md transition transform hover:scale-105 hover:shadow-lg">
                            Get Yours Now
                        </button>

                        <button className="border border-gray-400 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-lg">
                            Reservation
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center md:justify-end">
                    <img
                        src="https://i.postimg.cc/rwLGMs5K/heroimage2.png"
                        alt="Coffee Cup"
                        className="relative z-10 w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] object-contain"
                    />
                </div>

            </div>
        </section>
    );



}