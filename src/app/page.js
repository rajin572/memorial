import Navbar from "../components/shared/Navbar";
import Banner from "../components/shared/Banner";
import RecentStories from "../components/SiteComponents/RecentStories";
import AboutUs from "../components/SiteComponents/AboutUs";
import AboutApp from "../components/SiteComponents/AboutApp";
import PricingPlan from "../components/SiteComponents/PricingPlan";
import Footer from "../components/shared/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RecentStories />
      <AboutUs />
      <AboutApp />
      <PricingPlan />
      <Footer />
    </div>
  );
};

export default HomePage;
