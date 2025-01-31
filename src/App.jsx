import React from "react";
import {
  BackgroundHeading,
  Header,
  Sidebar,
  TodoDisplay,
} from "./components/index";

function App() {
  return (
    <div className="bg-[#F0D4B5] w-screen h-screen flex justify-center items-center">
      <BackgroundHeading />
      <main className="relative w-[972px] h-[80%] rounded bg-white m-20">
        <Header />
        <div className=" h-[90%] w-full rounded-bl pb-2 rounded-br flex flex-wrap ">
          <TodoDisplay />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
