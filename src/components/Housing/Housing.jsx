import { Wrapper } from "./Housing.style";

const Housing = ({ house }) => {
  return (
    <Wrapper>
      <div className="img__container">
        <img src={house} alt="building" />
      </div>
      <div className="housing__details">
        <div className="housing__name">
          <p>Desert king</p>
          <p className="price">1MBT per night</p>
        </div>
        <div className="availability">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="rating">
          <p>rating</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Housing;
