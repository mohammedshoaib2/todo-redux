import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const todoMetaData = useSelector((state) => {
    return state.todoSlice;
  });
  return (
    <div className=" bg-[#FBF5EE] h-[10%] px-8  rounded-tl rounded-tr flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-[#AAA49A]"></div>
        <div className="h-5 w-5 rounded-full bg-[#AAA49A]"></div>
        <div className="h-5 w-5 rounded-full bg-[#AAA49A]"></div>
      </div>
      {todoMetaData.totalTodos === 0 ? (
        <p className="text-gray-400">No todo's added</p>
      ) : (
        <p>
          <b>{todoMetaData.completedTodos.length ?? 0}</b> /
          {todoMetaData.totalTodos} todos completed
        </p>
      )}
    </div>
  );
}

export default Header;
