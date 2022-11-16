import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Navbar
        showModal={showModal}
        setShowModal={setShowModal}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setShowModal={setShowModal}
      />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Footer />
    </>
  );
};

export default Layout;
