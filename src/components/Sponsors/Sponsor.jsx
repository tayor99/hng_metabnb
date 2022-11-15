import { Wrapper } from "./Sponsor.style";
import Mbtoken from "../../Assets/MBToken.svg";
import Metamask from "../../Assets/Metamask.svg";
import Opensea from "../../Assets/OpenSea.svg";

const Sponsor = () => {
  return (
    <Wrapper>
      <div className="sponsor__container">
        <div className="sponsor__logo">
          <img src={Mbtoken} alt="mbtoken" />
        </div>
        <div className="sponsor__logo">
          <img src={Metamask} alt="mbtoken" />
        </div>
        <div className="sponsor__logo">
          <img src={Opensea} alt="mbtoken" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sponsor;
