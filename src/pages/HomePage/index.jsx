import React, { useContext } from "react";
import {
  MainButton,
  CounterLabel,
  TaskItem,
  TaskList,
  SearchInput,
} from "../../components";
import { TodoContext } from "../../context/todoContext";
import Modal from "../../components/modals";
import TodoForm from "../../components/forms";

const HomePage = () => {
  const { error, loading, onComplete, onDelete, searchedTodos, openModal } =
    useContext(TodoContext);

  return (
    <div className='grid'>
      <div className='frame'>
        <CounterLabel />
        <SearchInput />

        <TaskList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {!loading && !searchedTodos.length && <p>¡Crea tu primer todo!</p>}

          {searchedTodos.map((item, index) => (
            <TaskItem
              key={index}
              todo={item}
              onComplete={() => onComplete(item.text)}
              onDelete={() => onDelete(item.text)}
            />
          ))}
        </TaskList>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <MainButton />
      </div>
    </div>
  );
};

export default HomePage;
