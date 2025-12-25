import { useEffect, useState } from "react";


interface OfferModel {
    onClose: () => void;
}

const OfferModal = ({ onClose }: OfferModel) => {

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">

                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="https://i.postimg.cc/j27qjsPp/modal-logo.png"
                                alt="Mr Cafe Logo"
                                className="w-7 h-6 mb-1 object-contain"
                            />
                            <h3 className="font-semibold">MR. CAFE</h3>
                        </div>

                        <p className="text-sm text-gray-500 mb-2">Sign Up For Emails</p>

                        <h2 className="text-4xl font-serif font-bold mb-6">
                            Get 10% <br /> OFF
                        </h2>

                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-47 border rounded-md px-6 py-2 mb-4 focus:ring-2 focus:ring-amber-600"
                        />

                        <button className="bg-[#c49a5a] hover:bg-[#b0894f] text-white px-6 py-2 rounded-md">
                            Confirm Your Table
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://i.postimg.cc/ZYpCZcHr/modal-image.png"
                            alt="Coffee"
                            className="w-52 h-52 rounded-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>


    );




}

export default OfferModal;