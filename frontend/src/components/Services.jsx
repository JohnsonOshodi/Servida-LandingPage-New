import Button from './Button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Regular Cleaning',
    description:
      'Designed to keep your space tidy and fresh, our regular cleaning service covers routine tasks like dusting, vacuuming, mopping, and surface cleaning to maintain a clean, healthy environment.',
    bgColor: 'bg-sageMidToneWhite',
    hoverBgColor: 'hover:bg-sageLowBlue',
    buttonColor: 'bg-sageDarkBlue',
  },
  {
    title: 'Deep Cleaning',
    description:
      'For a more thorough and detailed clean, our deep cleaning service tackles hard-to-reach areas, focusing on removing built-up dirt and grime, disinfecting surfaces, and revitalizing your space.',
    bgColor: 'bg-sageMidToneWhite',
    hoverBgColor: 'hover:bg-sageDarkBlue',
    buttonColor: 'bg-sageLowBlue',
  },
  {
    title: 'Post Construction',
    description:
      'After a renovation or construction project, our post-construction cleaning ensures your space is spotless by removing debris, dust, and leftover materials, leaving it clean and ready to use.',
    bgColor: 'bg-sageMidToneWhite',
    hoverBgColor: 'hover:bg-sageHeavyBlue',
    buttonColor: 'bg-sageDarkBlue',
  },
];

const Services = () => {
  return (
    <section className="px-4  xl:py-14 py-16 md:py-2 bg-sageWhite" id="services">
      <div className="max-w-[103rem] mx-auto">
        <h2 className="font-bold text-[4.5rem] text-center mb-10 text-[#191A15]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-[1.6rem] w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 w-full ${service.bgColor} ${service.hoverBgColor} py-8 px-4 flex flex-col items-center gap-3 rounded hover:rounded-3xl`}
            >
              <h3 className=" group-hover:text-white font-bold text-[2.5rem] text-center">
                {service.title}
              </h3>
              <p className="text-center text-sageTextGray font-normal  leading-[3rem] group-hover:text-white mb-6">
                {service.description}
              </p>

              <Link to="/cleaner">
                <Button text="Book a Cleaner" bgColor={service.buttonColor} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
