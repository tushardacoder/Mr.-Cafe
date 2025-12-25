import { NavLink } from "react-router";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGlobe
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 ">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2 space-y-4 ">
                        <div className="flex items-center gap-2 mb-4  ">
                            <img
                                src="https://i.postimg.cc/j27qjsPp/modal-logo.png"
                                alt="Mr Cafe Logo"
                                className="w-10 h-8 mb-1 object-contain "
                            />
                            <h3 className="font-semibold mt-1">MR. CAFE</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                            <br />
                            We Collect The Best Quality Of Ingredients From <br />Market. With The Best
                            Execution We Provide Our Guest <br /> Fresh & Very Delicious Food.
                        </p>

                        {/* Location */}

                        {/* <div className="pt-4 space-y-2 ">
                            <br />
                            <br />
                            <br />
                            <h4 className="font-semibold">Our Location</h4>
                            <p className="flex items-start gap-2 text-sm text-gray-600">
                                <FaMapMarkerAlt className="mt-1" />
                                Above It <br />House# 20, Road# 09, Sector# 11, <br />Dhaka 1230
                            </p>
                            <NavLink
                                to="/map"
                                className="text-sm underline text-gray-700 hover:text-black"
                            >
                                <p className="flex items-start gap-2 text-sm text-gray-600">
                                    <FaGlobe className="mt-1" />
                                    Find Us On Map
                                </p>

                            </NavLink>

                        </div> */}



                    </div>


                    {/* Company */}
                    <div>
                        <br />
                        <br />
                        <br />
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <NavLink to="/about" className="hover:text-black">
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/community" className="hover:text-black">
                                    Community
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/careers" className="hover:text-black">
                                    Careers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacy" className="hover:text-black">
                                    Privacy Policy
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <br />
                        <br />
                        <br />
                        <h4 className="font-semibold mb-3">Menu</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <NavLink to="/menu/coffee" className="hover:text-black">
                                    Coffee
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu/drinks" className="hover:text-black">
                                    Drinks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu/food" className="hover:text-black">
                                    Food Items
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Keep in Touch */}
                    <div>
                        <br />
                        <br />
                        <br />
                        <h4 className="font-semibold mb-3">Keep In Touch</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <NavLink to="/contact" className="hover:text-black">
                                    E-Mail Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:text-black">
                                    Text Us
                                </NavLink>
                            </li>
                            <li>(406) 555-0120</li>
                        </ul>
                    </div>

                    {/* Reservation */}
                    <div>
                        <br />
                        <br />
                        <br />
                        <h4 className="font-semibold mb-3">Reservation</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Reservations are available for dinner, starting at{" "}
                            <span className="text-orange-500 underline font-semibold">3pm</span> each
                            <br /> day.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start  ">

                        {/* Location */}
                        <div className="space-y-4 ">
                            <h3 className="text-lg font-semibold">Our Location</h3>

                            <div className="flex items-start gap-2 text-sm text-gray-600">
                                <FaMapMarkerAlt className="mt-1" />
                                <p>
                                    Above It <br />
                                    House# 20, Road# 09 Sector# 11, <br />
                                    Dhaka 1230
                                </p>
                            </div>

                            <NavLink
                                to="/map"
                                className="flex items-start gap-2 text-sm text-gray-600 underline hover:text-black"
                            >
                                <FaGlobe className="mt-1" />
                                Find Us On Map
                            </NavLink>
                        </div>

                        {/* Coffee Image */}
                        <div className="flex justify-start ">
                            <img
                                src="https://i.postimg.cc/Ss5snNdQ/pngegg-(36)-1.png"
                                alt="Coffee Beans"
                                className="w-50 md:w-80 object-contain"
                            />
                        </div>

                        {/* Payment Section */}

                        <div className="flex justify-center mt-25 ">
                            <div className="flex flex-wrap items-center gap-6 grayscale opacity-80 ">
                                <img src="https://i.postimg.cc/bwn44JkW/visa.png" alt="Visa" className="h-8 " />
                                <img src="https://i.postimg.cc/1X4jB5yT/American-express.png" alt="Amex" className="h-8" />
                                <img src="https://i.postimg.cc/RZwbXYxy/mastercard.png" alt="Mastercard" className="h-8" />
                                <img src="https://i.postimg.cc/j5Sgqdnd/certified-corporation.png" alt="Certified" className="h-8" />
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center mt-25">
                            <div className="flex items-center gap-5 text-gray-600 text-lg">
                                <a href="#" className="hover:text-black"><FaFacebookF /></a>
                                <a href="#" className="hover:text-black"><FaInstagram /></a>
                                <a href="#" className="hover:text-black"><FaTwitter /></a>
                                <a href="#" className="hover:text-black"><FaEnvelope /></a>
                            </div>
                        </div>

                    </div>

                </div>



                {/* Bottom */}
                <div className="mt-12  pt-6 flex flex-col md:flex-row justify-center items-center  gap-4">
                    {/* <p className="text-sm text-gray-500 text-center md:text-left underline">
                        Privacy Policy / Cookie Policy / All Rights Reserved. Coffee Address
                        2025
                    </p> */}

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
                        <span className="underline cursor-pointer hover:text-gray-700 transition">
                            Privacy Policy
                        </span>

                        <span>/</span>

                        <span className="underline cursor-pointer hover:text-gray-700 transition">
                            Cookie Policy
                        </span>

                        <span>/</span>

                        <span className="whitespace-nowrap">
                            All rights reserved. 2025 Coffee Address. 
                        </span>
                    </div>






                </div>
            </div>




        </footer>
    );

}