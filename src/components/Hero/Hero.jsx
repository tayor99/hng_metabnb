import Button from "../Button/Button";
import { Wrapper } from "./Hero.style";
import Img1 from "../../Assets/image1.png";
import Img2 from "../../Assets/image2.png";
import Img3 from "../../Assets/image3.png";
import Img4 from "../../Assets/image4.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero__container">
        <div className="hero__content">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="hero__form">
            <div className="form__input">
              <input type="text" placeholder="Search for location" />
              <Button>Search</Button>
            </div>
          </form>
        </div>
        <div className="hero__images">
          <div className="img__bottom">
            <div className="img__container">
              <img src={Img1} alt="" />
            </div>
            <div className="img__container">
              <img src={Img2} alt="" />
            </div>
          </div>
          <div className="img__top">
            <div className="img__container">
              <img src={Img3} alt="" />
            </div>
            <div className="img__container">
              <img src={Img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
