import '../index.css';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import Form from '../components/Form';
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Form />
      <BentoGrid />
      <Timeline />  
      <Portfolio />
      <Footer />
    </>
  );  
}

export default HomePage; 
