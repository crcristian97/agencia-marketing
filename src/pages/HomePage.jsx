import '../index.css';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import Form from '../components/Form';
import React from 'react';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>We Make It Lab - Desarrollo web y marketing digital</title>
        <meta name="description" content="Impulsa tu presencia digital con landing pages profesionales, posicionamiento SEO y soluciones CRM personalizadas. Convierte visitantes en clientes." />
      </Helmet>
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
