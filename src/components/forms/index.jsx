import React, { useContext, useState } from "react";
import "./index.css";
import { TodoContext } from "../../context/todoContext";

const TodoForm = () => {
  const { addTask, setOpenModal } = useContext(TodoContext);
  const [value, setValue] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className='modal-form'>
      <h3>Ingresa una nueva tarea</h3>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        placeholder='Aquí va el texto..'
        className='input-form'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input id='' />
      <div className='buttons'>
        <button type='button' onClick={onCancel} className='modal-button'>
          Cancelar
        </button>
        <button type='submit' className='modal-button'>
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
