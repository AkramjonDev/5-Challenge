import { createContext, useReducer } from "react";

export const dataContext = createContext();

const initialValue = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : {
      data: [],
      darkmode: false,
    };

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_ITEM":
      localStorage.setItem(
        "data",
        JSON.stringify({ ...state, data: [...state.data, payload] })
      );
      return { ...state, data: [...state.data, payload] };
    case "DELETE_ITEM":
      let newData = state.data.filter((item) => item.id !== payload);
      localStorage.setItem("data", JSON.stringify({ ...state, data: newData }));
      return { ...state, data: newData };
  }
}

export function ContextProvider({ children }) {
  const [state, dispath] = useReducer(reducer, initialValue);

  function addItem(obj) {
    dispath({ type: "ADD_ITEM", payload: obj });
  }
  function deleteItem(id) {
    dispath({ type: "DELETE_ITEM", payload: id });
  }
  return (
    <dataContext.Provider value={{ state, addItem, deleteItem }}>
      {children}
    </dataContext.Provider>
  );
}
