import React, { useState } from "react";
import cross from "../assets/cross.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/features/todoSlice";

function Todo({ todo, ...rest }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggleComplete(todo.id));
      }}
      className="border-b-2 border-gray-100 w-full px-8 py-3 flex justify-between items-center cursor-pointer"
      {...rest}
    >
      <p className={`${todo.isCompleted ? "text-gray-400 line-through" : ""}`}>
        {todo.todoText}
      </p>
      <img
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo(todo.id));
        }}
        className="h-5 w-5"
        src={cross}
        alt="X"
      />
    </div>
  );
}

export default Todo;
