import BannerSection from "./BannerSection";
import FeaturedFacilities from "./FeaturedFacilities/FeaturedFacilities";
import HowItWorksSection from "./HowItWorks/HowItWorksSection";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <BannerSection />
      {/* featured facilities */}
      <FeaturedFacilities />
      {/* How it works */}
      <HowItWorksSection />
      {/* Testimonial */}
      <Testimonial />
    </div>
  );
};

export default Home;
