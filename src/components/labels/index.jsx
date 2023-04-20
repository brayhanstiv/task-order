import { Fragment, useContext } from "react";
import "./index.css";
import { TodoContext } from "../../context/todoContext";

const CounterLabel = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <Fragment>
      <h1 className='title'>What's up ✌?</h1>
      <h2 className='counter'>
        <span>Has </span>
        <span>completado {completedTodos} </span>
        <span>de {totalTodos} TODOs</span>
      </h2>
    </Fragment>
  );
};

export default CounterLabel;
