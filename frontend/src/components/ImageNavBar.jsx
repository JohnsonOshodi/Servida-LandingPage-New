const Logo = '/assets/icons/logofooter.svg'; 
const BackgroundImage = '/assets/images/Team.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[36.1rem]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`, 
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-28 md:py-12 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            width={46}
            height={46}
            alt="SageHub Logo"
            className="hidden sm:block"
          />
          <span className="text-white text-[1.6rem] font-extrabold">
            SageHub
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-[2rem]">
          <a href="#about" className="text-white text-[1.4rem] hover:underline">
            About Us
          </a>
          <a
            href="#services"
            className="text-white text-[1.4rem] hover:underline"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-white text-[1.4rem] hover:underline"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-white text-[1.4rem] hover:underline"
          >
            Contact Us
          </a>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-[4.8rem] font-bold text-center">
          Get A Cleaner Today
        </h1>
        <p className="text-[1.6rem]">
          Fill in the form to get a cleaner suited to you and your needs
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
