const HeroImg = "/assets/images/Hero.svg";
const Pricing = "/assets/icons/pricing.svg";
const Time = "/assets/icons/time.svg";
const Training = "/assets/icons/training.svg";

const ImageSide = () => {
  return (
    <div className="relative hidden md:flex lg:w-1/2 w-full justify-center items-center md:justify-end mb-8 md:mb-0">
      <img
        src={HeroImg}
        alt="Hero"
        className="w-full lg:w-3/4 md:w-80 h-auto rounded-md shadow-lg" data-aos="fade-up"
      />

      <div className="absolute py-3 px-4 bg-white bg-opacity-80 shadow-xl  rounded-md flex items-center gap-2 top-[0.5rem] -right-[3.25rem] transform rotate-[23deg] hover:rotate-0 transition duration-300  ">
        <img src={Pricing} alt="Pricing" />

        <p className="font-normal text-[16px]">Transparent Pricing</p>
      </div>

      <div className="absolute py-3 px-4 bg-white bg-opacity-80 shadow-xl  rounded-md flex items-center gap-2 bottom-[4.5rem] -right-[3.25rem] transform -rotate-[22deg] hover:rotate-0 transition duration-300  ">
        <img src={Training} alt="Training" />

        <p className="font-normal text-[16px]">
          Trained and Verified Personnel
        </p>
      </div>

      <div className="absolute py-3 px-4 bg-white bg-opacity-80 shadow-xl  rounded-md flex items-center gap-2 top-[7.5rem] left-[0.25rem] transform -rotate-[16deg] hover:rotate-0 transition duration-300  ">
        <img src={Time} alt="Time" />

        <p className="font-normal text-[16px]">Get more time for yourself</p>
      </div>
    </div>
  );
};

export default ImageSide;
