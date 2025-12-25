
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';
export default function Header() {

  return (


    <div className="bg-[#44403c] text-white py-2.5 px-4">
      <div className="max-w-7xl sm:text-left mx-auto flex flex-col lg:flex-row justify-center items-center gap-y-5 gap-x-45 lg:ml-25">

        {/* Promo Message */}
        <div className="text-xs sm:text-sm font-light text-center md:text-left">
          Sign up for our Loyalty Program today and receive{" "}
          <span className="font-semibold text-stone-200">15% OFF</span> your first order.
        </div>

        {/* Info Links Container */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[11px] sm:text-xs tracking-wide">

          {/* Support Phone */}
          <div className="flex items-center gap-2">
            <span className="text-stone-400">Need Help?</span>
            <a
              href="tel:+3025550107"
              className="underline underline-offset-2 hover:text-stone-300 transition-colors"
            >
              (+302) 555-0107-122
            </a>
          </div>

          {/* Vertical Divider (Hidden on mobile stack) */}
          <div className="hidden sm:block h-3 w-[1px] bg-stone-600"></div>

          {/* Operating Hours */}
          <div className="flex items-center gap-1.5">
            <HiOutlineClock className="text-lg" />
            <span>08:00am - 10:00pm</span>
          </div>

          {/* Locations Link */}
          <a
            href="/locations"
            className="flex items-center gap-1.5 hover:text-stone-300 transition-colors"
          >
            <HiOutlineLocationMarker className="text-lg" />
            <span className="underline underline-offset-2 md:no-underline">Our Locations</span>
          </a>

        </div>
      </div>
    </div>




  );




}