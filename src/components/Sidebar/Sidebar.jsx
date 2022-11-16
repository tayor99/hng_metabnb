import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../utils";
import { SidebarContainer } from "./Sidebar.style";
import Logo from "../../Assets/Logo.png";
import { Button } from "../Button/Button.style";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen, setShowModal }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const handleClick = () => {
    closeSidebar();
    setShowModal(true);
  };
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <div className="img__containter">
            <img src={Logo} alt="matabnb" />
          </div>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="navlinks">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.path} className="link" onClick={closeSidebar}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__buttons">
          <Button onClick={handleClick}>Connect wallet</Button>
        </div>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
