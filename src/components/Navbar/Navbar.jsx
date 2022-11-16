import { Header } from "./Navbar.style";
import Logo from "../../Assets/Logo.png";
import { links } from "../../utils";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setShowModal, setIsSidebarOpen }) => {
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  return (
    <Header>
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="img__containter">
            <img src={Logo} alt="matabnb" />
          </div>
        </div>
        <button className="nav-toggle" onClick={openSideBar}>
          <FaBars />
        </button>
        <div className="navlinks">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.path} className="link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar__buttons">
          <Button onClick={() => setShowModal(true)}>Connect wallet</Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
