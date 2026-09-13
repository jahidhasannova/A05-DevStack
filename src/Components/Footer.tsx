import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="text-center md:text-left">
          <div>
            <img
              src={FooterLogo}
              alt="Dev Stack Logo"
              className="mx-auto md:mx-0"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500 max-w-sm mx-auto md:mx-0">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              GitHub
            </a>

            <span className="text-gray-400">.</span>

            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Twitter
            </a>

            <span className="text-gray-400">.</span>

            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-semibold text-gray-900 mb-3">PRODUCT</h4>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Home
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Technologies
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-semibold text-gray-900 mb-3">COMPANY</h4>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              About
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Contact
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Careers
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-semibold text-gray-900 mb-3">LEGAL</h4>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8A35DC]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-30 border-t border-gray-200"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-row justify-between items-center gap-3">
        <p className="text-xs sm:text-sm text-gray-500">
          ©️ 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-900"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-900"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

