import { houses } from "../../utils";
import { Wrapper } from "./FavouriteHouses.style";
import Housing from "../Housing/Housing";
const FavouriteHouses = () => {
  return (
    <Wrapper>
      <div className="favouriteHouses__container">
        <h1>Inspiration for your next adventure</h1>
        <div className="favouriteHouses__body">
          {houses.slice(0, 8).map((house) => {
            return <Housing key={house.id} house={house.name} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FavouriteHouses;
