import Button from './Button';
import { Link } from 'react-router-dom';

const CurveImage = "/assets/images/curve.svg"; 

const TextSide = () => {
  return (
    <div className="lg:w-1/2 w-full text-center md:text-left max-w-screen-2xl">
      <h1 className="text-5xl lg:text-5xl md:text-4xl font-bold xl:text-[6.4rem] mb-9 leading-[3.5rem]">
        We’re here to increase your productivity
      </h1>
      <span>
        <img src={CurveImage} alt="Curved Decorative Element" />
      </span>
      <p className="md:text-xl mb-10 lg:text-[1.8rem] text-sageBlack mt-8 md:mt-6 font-normal text-[1.4rem]">
        Your Trusted Partner for Reliable Home Cleaning Services
      </p>

      <Link to="/cleaner">
        <Button text="Book a Cleaner" />
      </Link>
    </div>
  );
};

export default TextSide;
