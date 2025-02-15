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
    <form onSubmit={handleSubmit} className="flex items-center rounded-full overflow-hidden  bg-gray-200 w-full justify-between ">
  {/* Left (Gray) Section: Input */}
  <input
    type="text"
    placeholder="Add your task"
    value={input}
    onChange={handleChange}
    className=" px-4 py-4 focus:outline-none text-gray-700"
  />

  {/* Right (Red) Section: Button */}
  <button
    type="submit"
    className="bg-[#EFB036] text-white px-8 py-4 font-semibold rounded-full text-center"
  >
    ADD
  </button>
</form>

  );
}

export default TodoForm;
