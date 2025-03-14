const Logo = "/assets/images/faded logo.svg"; 
const People = "/assets/icons/people.svg"; 
import { TbTargetArrow } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';

const values = [
  {
    title: 'Mission',
    description:
      'Our mission at Servida is to make home care more accessible, transparent, and personalized for families and professionals. We connect clients with compassionate, skilled caregivers while empowering young individuals with flexible job opportunities, all through a seamless and reliable platform.',
    Icon: <TbTargetArrow />,
  },
  {
    title: 'Vision',
    description:
      'Our vision is to become the leading platform for home services, building a global community where families, busy professionals & aides can connect with trust and ease. We aim to create a world where home care is reliable, personalized, and accessible to all.',
    Icon: <AiOutlineEye />,
  },
];

const About = () => {
  const logos = [
    { className: 'left-[52%] top-[25%]' },
    { className: 'right-[51%] top-[25%]' },
    { className: 'right-[51%] bottom-[14%]' },
    { className: 'left-[52%] bottom-[14%]' },
    { className: 'left-[49%] top-[53%]', size: 93 },
  ];

  return (
    <section
      className="relative flex flex-col md:flex-row justify-between bg-gradient-to-l from-sageLightBlue via-sageMidWhite to-sageMidToneWhite px-4 md:px-20 lg:px-20 py-16 md:py-20 max-w-screen-full mx-auto"
      id="about"
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={Logo}
          height={logo.size || 49}
          width={logo.size || 49}
          alt="Logo"
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 -rotate-45 hover:rotate-0 duration-300 ${logo.className}`}
        />
      ))}

      {/* Left Side */}
      <div className="md:w-1/2 xl:w-[50.61rem] w-full text-center md:text-left mb-10 md:mb-0 p-2">
        <h2 className="text-[2.5rem] lg:text-5xl md:text-4xl font-bold xl:text-[5rem] mb-6 leading-[3.5rem]">
          Why Choose Servida
        </h2>
        <p className="text-[1.5rem] font-normal mb-10 leading-[3rem]">
          Choose Servida for personalized, reliable, and trusted home cleaning
          services, connecting you with vetted, trained & well-trusted cleaners
          to handle your cleaning needs seamlessly.
        </p>

        <h2 className="text-[3.2rem] font-bold mb-5">Our Core Values</h2>
        <div className="flex flex-col gap-3 md:flex-row justify-center md:justify-start xl:gap-14 md:gap-7">
          {['Trust', 'Transparency', 'Reliability'].map((value, index) => (
            <span
              key={index}
              className="text-sageHighBlue text-2xl md:text-base lg:text-[2.4rem] font-semibold hover-animation cursor-pointer"
            >
              {value}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start gap-20 mt-5">
          {['1+', '2+'].map((count, index) => (
            <span key={index} className="flex flex-col items-center gap-1">
              <img src={People} alt="People Icon" />
              <h1 className="text-[2.4rem] text-sageNumberGray">{count}</h1>
              <span className="text-[1.4rem] text-sageNumberGray">
                {index === 0 ? 'Client Served' : 'Registered Cleaners'}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 xl:w-[46.9rem] w-full flex flex-col space-y-10">
        {values.map((value, index) => (
          <div key={index} className="flex items-start space-x-5">
            <div className="group bg-white shadow-xl py-4 px-6 rounded-2xl w-[18rem] h-[6rem] flex items-center justify-center duration-300 hover:bg-sageLowBlue">
              <div className="object-contain text-sageProfileBlue text-5xl font-extrabold duration-300 group-hover:text-white">
                {value.Icon}
              </div>
            </div>
            <div>
              <h3 className="text-[2.4rem] font-bold mb-2">{value.title}</h3>
              <p className="leading-[3rem] text-[1.5rem] font-normal">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

