import Hero from './sections/Hero';
import ShowCaseSection from './sections/ShowcaseSection';
import NavBar from './component/NavBar';
import FeatureCards from './sections/FeatureCards';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
