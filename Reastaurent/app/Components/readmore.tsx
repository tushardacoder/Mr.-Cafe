

export default function Readmore() {


    return (
        <section className="bg-[#fbf7ef] py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 ">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
                        We’re A Dedicated Gluten-Free Café.
                    </h2>

                    <p className="text-gray-800 italic mb-6">
                        But you’d never know if we didn’t mention it.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        You see, our creations redefine what gluten-free means. Impossibly
                        moist layer cakes, decadent desserts, pillowy rolls, tender crumbs—
                        everything we make is a reflection of our commitment to flavor,
                        texture and artistry of the highest caliber. Informed by classical
                        French pastry technique and inspired by California’s spirit of
                        creativity, we bake because life’s too short for anyone to skip cake.
                    </p>

                    <button className="bg-[#b38b3e] text-white px-4 py-2 rounded-md hover:bg-[#9e7834] transition transition transform hover:scale-105 hover:shadow-lg">
                        Read More
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="  p-3 ">
                        <img
                            src="https://i.postimg.cc/RhZDDKHF/pngegg-(17)-1.png"
                            alt="Coffee Shake"
                            className="w-72 md:w-80 object-contain   transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );

}