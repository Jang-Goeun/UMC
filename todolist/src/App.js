import { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Fragment>
      <InputTodo />
      <TodoList />
    </Fragment>
  );
}

export default App;
