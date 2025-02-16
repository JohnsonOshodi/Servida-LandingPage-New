const TeamImg = "/assets/images/TeamImg.png"; 

import Form from "./Form";
const LinkedIn = "/assets/icons/linkedIn.svg";
const Facebook = "/assets/icons/facebook.svg"; 
const Whatsapp = "/assets/icons/whatsapp.svg";
const Logo = "/assets/icons/logofooter.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-20" id="contact">
      <div className="container mx-auto px-4 lg:px-32 flex flex-col md:flex-row justify-between gap-20">
        <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/2 w-full">
          <h2 className="text-[1.6rem] font-bold mb-4">Get in Touch</h2>
          <p className="mb-4 font-extrabold text-[3rem]">
            Let's Chat, Reach Out to Us
          </p>
          <p className="mb-4 font-normal text-[1.6rem] leading-7">
            Have questions or feedback? We are here to help. Send us a message
            and we will respond within 24 hours.
          </p>
          <Form />
        </div>

        {/* Footer Image */}
        <div className="flex flex-col items-center md:w-1/2 w-full mt-16">
          <img
            className="w-[478px] h-[323px] object-cover mb-4 rounded-[20px]"
            src={TeamImg}
            alt="Team"
          />

          <p className="text-[1.4rem] font-normal">Or contact us via</p>
          <div className="flex items-center gap-[5rem] mt-[2.4rem]">
            <img src={LinkedIn} alt="LinkedIn" width={30} height={30} />
            <img src={Facebook} alt="Facebook" width={30} height={30} />
            <img src={Whatsapp} alt="WhatsApp" width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[1.6rem]">
          {/* Logo Section */}
          <div
            className="flex items-center justify-center md:justify-start gap-[0.37rem] cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <span className="text-[4rem] font-[900]">Servida</span>
            <img src={Logo} alt="Logo" width={61} height={61} />
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-[2rem] items-center text-[1.6rem]">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact Us</a>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center justify-center md:justify-end gap-[5rem]">
            <img src={LinkedIn} alt="LinkedIn" width={30} height={30} />
            <img src={Facebook} alt="Facebook" width={30} height={30} />
            <img src={Whatsapp} alt="WhatsApp" width={30} height={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
