import BannerImage from "../assets/banner-stack.png";

function Banner() {
  return (
    <div
      id="home"
      className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 pt-20 pb-16 lg:py-20"
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h2 className="mb-8 text-4xl sm:text-5xl lg:text-7xl font-bold">
          <span className="whitespace-nowrap">
            Build Your Ideal
          </span>
          <br />
          <span className="gradient-text">
            Development Stack
          </span>
        </h2>

        <p className="mt-10 mb-14 mx-auto lg:mx-0 max-w-[340px] sm:max-w-lg text-base lg:text-lg text-gray-600">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

          <button className="gradient-button h-11 w-1/2 sm:w-52 rounded-xl font-medium cursor-pointer">
            Explore Technologies
          </button>

          <button className="h-11 w-1/2 sm:w-52 rounded-xl border border-pink-500 font-medium text-pink-500 hover:bg-pink-50 cursor-pointer">
            Learn More
          </button>

        </div>
      </div>

      <img
        src={BannerImage}
        alt="Development Stack"
        className="w-full lg:w-1/2 max-w-lg"
      />
    </div>
  );
}

export default Banner;

