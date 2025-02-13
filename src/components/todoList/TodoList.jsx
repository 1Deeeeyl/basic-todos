// import react from "react";

function TodoList({ todos ,setTodos}) {


  const handleClick = id => {
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>
    todo.id === id ?{...todo, isDone:!todo.isDone}:todo))
  }

  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-amber-400">
          <li
            
            onClick={() => handleClick(todo.id)} // Pass id to track the clicked todo
            className={`${todo.isDone ? "" : "line-through"
            }`}
          >
            {todo.text}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
