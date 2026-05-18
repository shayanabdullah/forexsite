// Section import
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import LogoSlider from "../sections/LogoSlider";

const HomePage = () => {
  return <div className="bg-black mx-auto">
    {/* Hero Section */}
    <HeroSection/>

    {/* Logo Slider */}
    <LogoSlider/>

    {/* Features */}
    <FeaturesSection/>
  </div>;
};

export default HomePage;
