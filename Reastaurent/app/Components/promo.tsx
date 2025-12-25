
import { Link } from "react-router";


export default function Promo() {


    return (
        <section className="bg-[#f7f2ea] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <Link to="/coffee" className="group relative rounded-xl overflow-hidden">
                        <img
                            src="https://i.postimg.cc/mrPt35DF/Frame-12.png"
                            alt="Coffee Writing"
                            className="w-full h-[320px] object-cover group-hover:scale-105 transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />
                        {/* <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-white text-2xl font-semibold">
                                    Drink coffee and <br /> keep writing.
                                </h3>
                                <p className="text-white italic mt-2">Welcome to our Cafe</p>
                            </div>
                            <p className="text-white font-medium">
                                Get 10% Discount for <br /> Office Coffee
                            </p>
                        </div> */}
                    </Link>

                    {/* Card 2 */}
                    <Link to="/menu" className="group relative rounded-xl overflow-hidden">
                        <img
                            src="https://i.postimg.cc/7h9K16s2/Frame-13.png"
                            alt="Cafe Interior"
                            className="w-full h-[320px] object-cover group-hover:scale-105 transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />
                        {/* <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-white text-2xl font-semibold">
                                    Fix Your Mind With <br /> Our Coffee
                                </h3>
                                <p className="text-white italic mt-2">Welcome to our Cafe</p>
                            </div>
                            <p className="text-white font-medium">
                                Get 10% Discount for <br /> Office Coffee
                            </p>
                        </div> */}
                    </Link>

                    {/* Card 3 */}
                    <Link to="/books" className="group relative rounded-xl overflow-hidden">
                        <img
                            src="https://i.postimg.cc/C1V7WD9q/Frame-14.png"
                            alt="Coffee and Book"
                            className="w-full h-[320px] object-cover group-hover:scale-105 transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />
                        {/* <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-white text-2xl font-semibold">
                                    Coffee & A Favorite <br /> Book
                                </h3>
                            </div>
                            <p className="text-white font-medium">
                                Enjoy Our 15% Discount <br /> For A Book Lover
                            </p>
                        </div> */}
                    </Link>

                </div>

                {/* Bottom Images */}
                <div className="mt-12 flex justify-center">
                    <img
                        src="https://i.postimg.cc/d3sB0FsT/Group-89.png"
                        alt="Barista"
                        className="
      rounded-xl object-cover w-full max-w-md h-[260px]
      transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl
    "
                    />
                </div>



            </div>
        </section>
    );



}