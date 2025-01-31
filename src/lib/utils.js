export const updateLocalStorage = (data) => {
  try {
    localStorage.setItem("todos", JSON.stringify(data));
  } catch (error) {
    console.log(`LOCALDB :: setItem :: ${error}`);
  }
};

export const getLocalStorage = () => {
  try {
    const data = localStorage.getItem("todos");
    if (!data) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (error) {
    console.log(`LOCALDB :: getItem :: ${error}`);
  }
};
