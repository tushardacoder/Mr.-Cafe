import { NavLink } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-amber-600 font-semibold"
            : "text-gray-700 hover:text-amber-600 transition";

    return (
        <nav className="relative w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src="https://i.postimg.cc/j27qjsPp/modal-logo.png"
                            alt="Mr Cafe Logo"
                            className="w-8 h-7 object-contain"
                        />
                        <h3 className="font-semibold">MR. CAFE</h3>
                    </NavLink>

                    {/* Desktop Menu (LG+) */}
                    <div className="hidden lg:flex items-center gap-6">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/about" className={linkClass}>About Us</NavLink>
                        <NavLink to="/coffee" className={linkClass}>Coffee & Drinks</NavLink>

                        {/* Dropdown */}
                        <div className="relative group">
                            <span className="cursor-pointer text-gray-700 group-hover:text-amber-600">
                                Food Menu ▾
                            </span>
                            <div className="absolute top-6 left-0 hidden group-hover:block bg-white shadow-md rounded-md w-40">
                                <NavLink to="/food/breakfast" className="block px-4 py-2 hover:bg-gray-100">Breakfast</NavLink>
                                <NavLink to="/food/lunch" className="block px-4 py-2 hover:bg-gray-100">Lunch</NavLink>
                                <NavLink to="/food/dessert" className="block px-4 py-2 hover:bg-gray-100">Dessert</NavLink>
                            </div>
                        </div>

                        <NavLink to="/reservation" className={linkClass}>Reservation</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
                    </div>

                    {/* Right Icons (LG+) */}
                    <div className="hidden lg:flex items-center gap-5">
                        <IoSearch className="text-xl cursor-pointer" />
                        <div className="flex items-center gap-1">
                            <span className="text-sm">$0.00</span>
                            <FaShoppingCart />
                        </div>
                        <div className="flex items-center gap-1">
                            <FaUser />
                            <span className="text-sm">Jacob</span>
                        </div>
                    </div>

                    {/* Hamburger (SM + MD) */}
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        className="block lg:hidden text-2xl z-50"
                        aria-label="Toggle Menu"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile / Tablet Menu */}
            <div
                className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40
                transition-all duration-300 ease-in-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <div className="flex flex-col px-6 py-4 space-y-4">
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
                    <NavLink to="/coffee" onClick={() => setOpen(false)}>Coffee & Drinks</NavLink>
                    <NavLink to="/food" onClick={() => setOpen(false)}>Food Menu</NavLink>
                    <NavLink to="/reservation" onClick={() => setOpen(false)}>Reservation</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
                </div>
            </div>
        </nav>
    );
}
