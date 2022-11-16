import { houses } from "../../utils";
import Housing from "../Housing/Housing";

import { Wrapper } from "./Places.style";

const Places = () => {
  return (
    <Wrapper>
      <div className="places__container">
        {houses.map((house) => {
          return <Housing key={house.id} house={house.name} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Places;
