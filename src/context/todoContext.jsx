import { createContext, useState } from "react";
import useLocalStorage from "../hooks/localStorage.hook";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const onComplete = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTask = (text) => {
    const newTodos = [
      ...todos,
      {
        text,
        completed: false,
      },
    ];
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        searchedTodos,
        onComplete,
        onDelete,
        addTask,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
