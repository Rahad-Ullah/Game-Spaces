import BannerSection from "./BannerSection";
import FeaturedFacilities from "./FeaturedFacilities/FeaturedFacilities";
import HowItWorksSection from "./HowItWorks/HowItWorksSection";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <BannerSection />
      {/* featured facilities */}
      <FeaturedFacilities />
      {/* How it works */}
      <HowItWorksSection />
    </div>
  );
};

export default Home;
