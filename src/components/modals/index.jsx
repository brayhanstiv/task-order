import ReactDOM from "react-dom";
import "./index.css";
import { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/todoContext";

const Modal = ({ children }) => {
  const { setOpenModal } = useContext(TodoContext);

  const onOpenModal = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <Fragment>
      <div className='modal-background'>
        <div className='content-background'>
          {children}
          <div className='modal-close' onClick={onOpenModal}>
            <FontAwesomeIcon icon={faClose} />
          </div>
        </div>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
