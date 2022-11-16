import Home from "../../pages/Home/Home";
import PlaceToStay from "../../pages/PlaceToStay/PlaceToStay";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <PlaceToStay />
      <Footer />
    </>
  );
};

export default Layout;
