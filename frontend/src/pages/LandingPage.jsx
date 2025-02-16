import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import AnimationDevices from '@/components/AnimationDevices';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <AnimationDevices />
      <Testimonials />
      <Team />
      <Footer />
      <Toaster />
    </>
  );
};

export default LandingPage;
