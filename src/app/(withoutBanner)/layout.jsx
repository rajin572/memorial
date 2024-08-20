import Container from "@/components/ui/Container";
import Banner from "../../components/shared/Banner";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
