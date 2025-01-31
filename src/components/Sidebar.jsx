import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";
import { getLocalStorage, updateLocalStorage } from "../lib/utils";

function Sidebar() {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex-1 h-full w-full  bg-white p-4 flex flex-col justify-between gap-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoInput)
            dispatch(
              addTodo({
                id: Date.now(),
                todoText: todoInput,
                isCompleted: false,
              })
            );
          setTodoInput("");
        }}
        className=" flex flex-col justify-center items-start gap-2"
      >
        <p>Add a todo</p>
        <input
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          style={{
            borderStyle: "none",
            border: "2px solid #F3F4F6",
          }}
          className=" px-3 py-2 rounded w-full"
          type="text"
        />
        <Button type="submit">Add to list</Button>
      </form>

      <div className="flex flex-col justify-center items-center gap-2">
        <Button onClick={() => {}} buttonType="secondary">
          Login
        </Button>
        <Button onClick={() => {}} buttonType="secondary">
          Register
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
