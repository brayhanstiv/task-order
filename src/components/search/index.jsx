import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import "./index.css";

const SearchInput = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='search'
      placeholder='Buscar tareas'
      value={searchValue}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
