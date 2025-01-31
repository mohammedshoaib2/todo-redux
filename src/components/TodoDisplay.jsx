import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoDisplay() {
  const todos = useSelector((state) => {
    return state.todoSlice.todos;
  });
  return (
    <div className="overflow-scroll flex-2 bg-white h-full  w-full  border-r-2 border-gray-100 flex flex-col justify-start items-center">
      {!todos.length ? (
        <div className="h-full w-full flex justify-center items-center text-gray-400">
          Add a Todo to get Started
        </div>
      ) : (
        todos?.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })
      )}
    </div>
  );
}

export default TodoDisplay;
