import { Wrapper } from "./Filter.style";
import settings from "../../Assets/setting-5.svg";
const Filter = () => {
  return (
    <Wrapper>
      <div className="filter__container">
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <li>
            Location <img src={settings} alt="icon" />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Filter;
