import { useContext } from "react";
import "./index.css";
import { TodoContext } from "../../context/todoContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <div className='div-button'>
      <FontAwesomeIcon
        onClick={setOpenModal}
        icon={faPlus}
        className='main-button'
      />
    </div>
  );
};

export default MainButton;
