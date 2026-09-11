import BannerImage from '../assets/banner-stack.png';

function Banner() {
    return (
        <div className="container mx-auto flex items-center justify-between gap-10 py-20">

            {/* Banner Content */}
            <div>
                <h2 className="mb-8 text-7xl font-bold ">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>

                <p className="mt-10 mb-14 max-w-lg text-lg  text-gray-600">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                {/* Banner Button */}
                <div className="flex gap-4">
                    <button
                        className="btn h-10 w-52 rounded-xl bg-white font-medium text-gray-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white"
                    >
                        Explore Technologies
                    </button>

                    <button
                        className="btn h-10 w-52 rounded-xl bg-white font-medium  text-gray-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Banner Image */}
            <img
                src={BannerImage}
                alt="Development Stack"
                className="w-1/2 max-w-lg"
            />

        </div>
    );
}

export default Banner;