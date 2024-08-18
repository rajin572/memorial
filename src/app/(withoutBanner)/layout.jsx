import Banner from "../../components/shared/Banner";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-80 my-12">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
