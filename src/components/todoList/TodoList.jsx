import { useState } from "react";

import Modal from "../modal/Modal";

function TodoList({ todos, setTodos }) {
  const [open, setOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [modalType, setModalType] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEditClick = (todo) => {
    setModalType("edit");
    setTodoEdit(todo);
    setEditedText(todo.text); // Set initial text in input
    setOpen(true);
  };

  const confirmEdit = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoEdit.id ? { ...todo, text: editedText } : todo
      )
    );
    setOpen(false);
    setTodoEdit(null);
  };

  const handleDeleteClick = (id) => {
    setModalType("delete");
    setTodoToDelete(id);
    setOpen(true);
  };

  const confirmDelete = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== todoToDelete)
    );
    setOpen(false);
    setTodoToDelete(null);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-row items-center justify-between"
          >
            <li
              onClick={() => handleTask(todo.id)} // Pass id to track the clicked todo
              className={`${todo.isDone ? "line-through font-bold" : ""}`}
            >
              {todo.text}
            </li>
            <span className="flex-row flex">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                onClick={() => handleEditClick(todo)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                  fill="#000000"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                className="h-9 w-9 fill-red-600"
                onClick={() => handleDeleteClick(todo.id)}
              >
                <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"></path>
              </svg>
            </span>
          </div>
        ))}
      </ul>
      <Modal open={open} onClose={() => setOpen(false)}>
        {modalType === "delete" ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-red-600"
            >
              <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"></path>
            </svg>
            <h3 className="mt-[15px]">Confirm Delete</h3>
            <p>Are you sure you want to delete this item?</p>
            <span className="flex flex-row gap-5 mt-[15px]">
              <button onClick={confirmDelete} className="bg-red-600 text-white p-3 rounded-md">CONFIRM</button>
              <button
                className="text-slate-700 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                CANCEL
              </button>
            </span>
          </>
        ) : (
          <>
            <h3>Edit Task</h3>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={confirmEdit}>SAVE</button>
          </>
        )}
      </Modal>
    </>
  );
}

export default TodoList;
