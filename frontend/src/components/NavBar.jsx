import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaXmark, FaBars } from 'react-icons/fa6';
import Button from './Button';

const Logo = "/assets/images/logo.svg";  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { link: 'About Us', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Pricing', path: 'pricing' },
    { link: 'Contact Us', path: 'contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-[1000]">
      <nav
        className={`py-5 lg:py-10 lg:px-20 md:px-6 px-4 bg-gradient-to-r from-sageLightBlue via-sageMidWhite to-sageGray ${
          isSticky ? 'sticky top-0 left-0 right-0 border-b duration-300' : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#" className="font-semibold flex items-center gap-1">
            <img
              src={Logo}
              alt="SageHub Logo"
              className="w-[4.6rem] h-[4.6rem] inline-block items-center"
            />
            <span className="text-[1.6rem] font-extrabold text-sageHeavyBlue">
              SageHub
            </span>
          </a>

          {/* Nav items for large devices */}
          <ul className="md:flex md:items-center gap-5 hidden">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                key={path}
                to={path}
                smooth={true}
                offset={-90}
                duration={100}
                className={`lg:text-[1.4rem] md:text-[1.2rem] font-normal cursor-pointer mr-4 text-[#000000] hover:text-sageDarkBlue transition-all duration-300 ${
                  activeItem === path
                    ? 'text-sageDarkBlue transition-all duration-300'
                    : ''
                }`}
                onClick={() => setActiveItem(path)}
              >
                {link}
              </ScrollLink>
            ))}
            <RouterLink to="/cleaner">
              <Button text="Book a Cleaner" />
            </RouterLink>
          </ul>

          {/* Menu button for mobile devices */}
          <div className="md:hidden z-30">
            <button onClick={toggleNav} className="focus:outline-none">
              {isOpen ? (
                <FaXmark className="h-8 w-8" />
              ) : (
                <FaBars className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`fixed flex flex-col items-center justify-center gap-6 top-0 right-0 w-full h-full bg-sageProfileBlue pb-20 transition-transform duration-500 md:hidden  ${
            isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <ScrollLink
              key={path}
              to={path}
              smooth={true}
              offset={-70}
              duration={100}
              className=" text-[1.2rem] mt-5 font-normal cursor-pointer hover:text-white duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </ScrollLink>
          ))}
          <RouterLink to="/cleaner">
            <Button text="Book a Cleaner" />
          </RouterLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
