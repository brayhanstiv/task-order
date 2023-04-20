import "./App.css";
import { TodoProvider } from "./context/todoContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <TodoProvider>
      <HomePage />
    </TodoProvider>
  );
}

export default App;
