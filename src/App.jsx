import Container from "./components/container/Container";
import Title from "./components/title/Title";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    if (!todo.text.trim()) {
      return;
    }
    console.log("Todo received in App:", todo);
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  return (
    <Wrapper>
      <Container>
        <Title />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </Wrapper>
  );
}

export default App;
