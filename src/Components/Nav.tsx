import Logo from "../assets/logo-text.png";

function Nav() {
    return (
        <nav className="bg-gray-50">
            <div className="container mx-auto flex items-center justify-between py-4">

                
                <img src={Logo} alt="Logo image" />


                <ul className="flex items-center gap-6">
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

                <div className="flex items-center gap-3">
                    <button className="rounded-full px-5 py-2 transition cursor-pointer hover:bg-pink-500 hover:text-white">
                        Sign In
                    </button>

                    <button className="rounded-full px-5 py-2 transition cursor-pointer hover:bg-pink-500 hover:text-white">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Nav;