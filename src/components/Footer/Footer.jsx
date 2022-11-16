import { Wrapper } from "./Footer.style";
import logo from "../../Assets/Logo2.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__container">
        <div className="company">
          <div className="company__logo">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="social__links">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <div className="certification">
            <p> &copy; 2022 Metabnb</p>
          </div>
        </div>
        <div className="footer__links">
          <div className="community">
            <h1>Community</h1>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="Places">
            <h1>Places</h1>
            <ul>
              <li>Castle</li>
              <li>Farms </li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div className="About">
            <h1>About Us</h1>
            <ul>
              <li>Road map</li>
              <li>Creators </li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
