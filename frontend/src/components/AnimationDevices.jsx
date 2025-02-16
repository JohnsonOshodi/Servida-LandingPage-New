import Button from '../components/Button';
import { FaPlay } from 'react-icons/fa6';

const AnimationSection = () => {
  return (
    <div className="bg-sageWhite pb-20 pt-14">
      <span className="relative h-[70vh] w-full flex flex-col lg:flex-row items-center justify-center">
        {/* Small Laptop (Back) */}
        <img
          src="/assets/animation/small-laptop.png" // Updated path
          alt="Small Laptop"
          className="absolute z-0 hidden sm:block"
          data-aos="zoom-in-up"
          data-aos-delay="1500"
          style={{
            width: '500px',
            transform: 'translate(-300px, 0px)',
          }}
        />

        {/* Bigger Laptop */}
        <img
          src="/assets/animation/open-laptop.png" // Updated path
          alt="Big Laptop"
          className="absolute z-10 w-3/4 lg:w-2/5"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            width: '650px',
          }}
        />

        {/* Tablet */}
        <img
          src="/assets/animation/tab.png" // Updated path
          alt="Tablet"
          className="absolute z-20 hidden sm:block"
          data-aos="zoom-in-right"
          data-aos-delay="1000"
          style={{
            width: '440px',
            transform: 'translate(220px, 0px)',
          }}
        />
      </span>

      <div className="text-center">
        <h1 className="text-sageBlack font-aftika text-center font-extrabold md:text-[4.5rem] lg:text-[6.5rem] text-[3.5rem]">
          Our Platform Is Coming Soon
        </h1>
        <h6 className="text-sageBlack mb-10 mt-10 font-aftika text-center md:text-4xl lg:text-[1.8rem] text-[1.8rem]">
          Join our waitlist as we prepare to launch
        </h6>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <input
            type="email"
            name=""
            id=""
            className="bg-sageLightBlue pl-10 pr-20 py-3 rounded-lg placeholder:font-aftika placeholder:text-xl border-none"
            placeholder="Email Address"
          />
          <Button className="py-3 font-aftika" text="Join Waitlist" />
          <Button
            className="py-5 font-aftika"
            text={
              <>
                <span className="inline-flex text-center">
                  <FaPlay className="mr-4 mt-2" />
                  <span>Try the Demo</span>
                </span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationSection;
