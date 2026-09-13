import { IoMenu } from "react-icons/io5";
import Logo from "../assets/logo-text.png";

function Nav() {
    return (
        <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50 border-b-2 border-gray-100">
            <div className="container mx-auto px-4 flex items-center justify-between py-3 lg:py-4">

                {/* Mobile Menu */}
                <button className="lg:hidden text-2xl cursor-pointer">
                    <IoMenu />
                </button>

                {/* Logo */}
                <img
                    src={Logo}
                    alt="Logo image"
                    className="w-28 lg:w-auto"
                />

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6">
                    <li className="cursor-pointer transition hover:text-pink-500">
                        Home
                    </li>
                    <li className="cursor-pointer transition hover:text-pink-500">
                        Technologies
                    </li>
                    <li className="cursor-pointer transition hover:text-pink-500">
                        Projects
                    </li>
                    <li className="cursor-pointer transition hover:text-pink-500">
                        About
                    </li>
                    <li className="cursor-pointer transition hover:text-pink-500">
                        Contact
                    </li>
                </ul>

                {/* Sign In / Sign Up */}
                <div className="flex items-center gap-1 sm:gap-3">
                    <button className="rounded-full px-3 sm:px-5 py-2 transition cursor-pointer hover:bg-pink-700 hover:text-white text-sm sm:text-base">
                        Sign In
                    </button>

                    <button className="rounded-full px-3 sm:px-5 py-2 transition cursor-pointer hover:bg-pink-700 hover:text-white text-sm sm:text-base">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Nav;

