import { Button } from "../Button/Button";
import { Wrapper } from "./Discover.style";
import Image5 from "../../Assets/image5.png";
import Image6 from "../../Assets/image6.png";
import Image7 from "../../Assets/image7.png";
const Discover = () => {
  return (
    <Wrapper>
      <div className="discover__container">
        <div className="discover__article">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <div className="btn">
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
        <div className="discover__image">
          <div className="img__container image1">
            <img src={Image5} alt="hotel-img" />
          </div>
          <div className="img__container image2">
            <img src={Image6} alt="hotel-img" />
          </div>
          <div className="img__container image3">
            <img src={Image7} alt="hotel-img" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Discover;
