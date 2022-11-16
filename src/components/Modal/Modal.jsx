import { Wrapper } from "./Modal.style";
import { FaTimes } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import metamask from "../../Assets/metaIcon.png";
import walletIcon from "../../Assets/walletIcon.png";

const Modal = ({ setShowModal }) => {
  return (
    <Wrapper>
      <div className="modal__content">
        <div className="modal__header">
          <div className="modal__headerContainer">
            <h1>Connect Wallet</h1>
            <FaTimes onClick={() => setShowModal(false)} />
          </div>
        </div>
        <div className="modal__body">
          <p>Choose your preferred wallet:</p>
          <div className="modal__buttons">
            <button>
              <div className="logo">
                <img src={metamask} alt="logo" />
                <span>Metamask</span>
              </div>

              <AiOutlineRight />
            </button>
            <button>
              <div className="logo">
                <img src={walletIcon} alt="logo" />
                <span>WalletConnect</span>
              </div>

              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
