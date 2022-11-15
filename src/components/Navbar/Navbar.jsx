import { Header } from "./Navbar.style";
import Logo from "../../Assets/Logo.png";
import { links } from "../../utils";
import { Button } from "../Button/Button";

const Navbar = () => {
  return (
    <Header>
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="img__containter">
            <img src={Logo} alt="matabnb" />
          </div>
        </div>
        <div className="navlinks">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <span>{link.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar__buttons">
          <Button>Connect wallet</Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
