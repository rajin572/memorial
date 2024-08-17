import Banner from "../../components/shared/Banner";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
