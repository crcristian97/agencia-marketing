import '../index.css';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Services from '../components/Service';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';
import FAQSection from '../components/Faq';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <BentoGrid />
      <Timeline />  
      <Portfolio />
      <FAQSection />
      <Footer />
    </>
  );  
}

export default HomePage; 
