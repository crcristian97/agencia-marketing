import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import CaseStudy from '../components/CaseStudy';
import AlternatingGrid from '../components/AlternatingGrid';
import NumberedSteps from '../components/NumeroSteps';
import Footer from '../components/Footer';
import { portfolioItems } from '../data/portfolioData';

function PortfolioPage() {
  const { title } = useParams();
  const projectData = portfolioItems[title];

  if (!projectData) {
    return <div>Proyecto no encontrado</div>;
  }

  const { heroBannerProps, caseStudyProps, gridItems, steps } = projectData;

  return (
    <>
      <Navbar />
      <HeroBanner {...heroBannerProps} />
      <CaseStudy {...caseStudyProps} />
      <AlternatingGrid {...gridItems} />
      <NumberedSteps steps={steps} />
      <Footer />
    </>
  );
}

export default PortfolioPage;