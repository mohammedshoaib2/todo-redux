import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import { getLocalStorage, updateLocalStorage } from "../../lib/utils";

const dataFromDB = getLocalStorage();

const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
  },
  preloadedState: { todoSlice: dataFromDB },
});

store.subscribe(() => {
  const storeData = store.getState();
  updateLocalStorage(storeData.todoSlice);
});

export { store };
