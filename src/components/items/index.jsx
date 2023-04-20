import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const TaskItem = ({ todo, onComplete, onDelete }) => {
  return (
    <div className='item'>
      <div className='item-div'>
        <input
          type='checkbox'
          name={todo.text}
          id={todo.text}
          checked={todo.completed}
          onChange={onComplete}
        />
        <p className={todo.completed ? "item-checkbox" : ""}>{todo.text}</p>
      </div>
      <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
    </div>
  );
};

export default TaskItem;
