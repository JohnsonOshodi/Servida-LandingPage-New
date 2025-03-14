import TextSide from './TextSide';
import ImageSide from './ImageSide';

const Hero = () => {
  return (
    <section className="flex flex-col bg-gradient-to-r from-sageLightBlue via-sageMidWhite to-sageMidToneWhite shadow-lg shadow-sageMidWhite mt-8 lg:mt-14 md:mt-4 md:flex-row items-center justify-between space-y-10 md:space-y-0 px-4 lg:px-20 md:px-14 py-32 lg:py-36 md:pt-32">
      <TextSide />
      <ImageSide />
    </section>
  );
};

export default Hero;
