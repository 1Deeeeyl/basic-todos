import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Please enter a task!"); 
      return;
    }

    const newTodo = {
      id: Date.now(), 
      text: input.trim(),
      isDone: false,
    };

    console.log("Submitting new todo:", newTodo); 
    addTodo(newTodo); 

    setInput(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        value={input}
        placeholder="Add A ToDo"
        className="rounded-lg border border-slate-500 p-2 focus:outline-orange-300 "
        onChange={handleChange}
      />
      <button type="submit" className="ml-5 bg-amber-400 p-2 rounded-md">
        Add ToDo
      </button>
    </form>
  );
}

export default TodoForm;
