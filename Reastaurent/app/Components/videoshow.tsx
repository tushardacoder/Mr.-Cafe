
import React from "react";
import { FaPlay } from "react-icons/fa";


export default function Videoshow() {


    return (
        <section className="bg-[#fbf7ef] py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Left Image */}
                <div className="w-full md:w-1/4 flex justify-center">
                    <img
                        src="https://i.postimg.cc/Z5X0YLb6/Rectangle-13.png"
                        alt="Cafe Outdoor"
                        className="rounded-xl shadow-md object-cover w-64 h-40  transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                    />
                </div>

                {/* Center Video */}
                <div className="relative w-full md:w-2/4 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://i.postimg.cc/mkZgpXjb/Rectangle-11.png"
                            alt="Video Preview"
                            className="w-full h-[260px] md:h-[320px] object-cover  transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                        />

                        {/* Play Button */}
                        <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
                            <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center ">
                                <FaPlay className="text-white ml-1 text-xl" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/4 flex justify-center">
                    <img
                        src="https://i.postimg.cc/SKWQSFtz/Rectangle-12.png"
                        alt="Cafe Interior"
                        className="rounded-xl shadow-md object-cover w-64 h-40  transition-all duration-500 ease-out
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );





}