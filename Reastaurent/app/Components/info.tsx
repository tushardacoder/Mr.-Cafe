


export default function Info() {

    return (
        <section className="bg-[#fbf7ef] py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 ">

                {/* LEFT CARD */}
                <div>
                    <img
                        src="https://i.postimg.cc/63fdGPT3/Rectangle-14.png"
                        alt="Relax Cafe"
                        className="rounded-xl mb-6 transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                    />

                    <h3 className="text-2xl font-serif font-semibold mb-4">
                        Rest, Relax & Revive!
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        At Vertical People Come From All Around To Rest, Relax And Revive
                        With Good Coffee, Good Company, And Great Food!
                    </p>

                    <div className="flex items-center justify-center gap-3 text-gray-700">
                        <img
                            src="https://i.postimg.cc/fTfRQhpy/IMAGE.png"
                            alt="Mr Cafe Logo"
                            className=" h-25 object-contain transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />
                    </div>
                </div>

                {/* MIDDLE CARD */}
                <div>
                    <img
                        src="https://i.postimg.cc/Cxnk45zV/Rectangle-15.png"
                        alt="Coffee Bar"
                        className="rounded-xl mb-6 transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                    />

                    <h3 className="text-2xl font-serif font-semibold mb-4">
                        Did Someone Say “Coffee”
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        We Offer Some Of The Best Locally Roasted Coffee Using
                        “Brazilian Santos” Beans. Enjoy Dark, Blonde, Jamaican,
                        Italian & Decaf Roasts. Also Available Are Our Specialty
                        Lattes, Frappes, Mochas, Cappuccinos, Americanos & More…
                    </p>
                </div>

                {/* RIGHT OPENING HOURS */}
                <div>
                <div className="bg-[#1f1b16] text-white rounded-xl p-4 shadow-lg transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl">
                    <h3 className="text-2xl font-serif font-semibold mb-6">
                        Opening Hours
                    </h3>

                    <ul className="space-y-4 text-sm">
                        {[
                            ["Monday", "7:00 am – 5:00 pm"],
                            ["Tuesday", "7:00 am – 5:00 pm"],
                            ["Wednesday", "7:00 am – 5:00 pm"],
                            ["Thursday", "7:00 am – 5:00 pm"],
                            ["Friday", "7:00 am – 5:00 pm"],
                            ["Saturday", "8:00 am – 2:00 pm"],
                            ["Sunday", "Closed"],
                        ].map(([day, time]) => (
                            <li key={day} className="flex justify-between border-b border-white/10 pb-2">
                                <span>{day}</span>
                                <span className="text-gray-300">{time}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-sm mt-6 text-gray-400">
                        Call: +1 585 786 8181
                    </p>

                   
                </div>
                 <button className="mt-8 bg-[#b38b3e] hover:bg-[#9e7834] text-white px-4 py-2 rounded-md transition">
                        Book Your Table
                    </button>
                </div>

            </div>
        </section>
    );



}