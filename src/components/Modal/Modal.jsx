import { useState, useContext } from "react";
import { dataContext } from "../../context";
function Modal() {
  const { state, addItem, deleteItem } = useContext(dataContext);
  console.log(state);
  const [data, setData] = useState({
    title: "",
    time: null,
    method: "",
    ingredients: null,
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000);
    addItem({ ...data, id });
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h2 className="mb-5">Create Recipe</h2>
        <form method="dialog">
          <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>

          <div className="flex flex-col gap-5">
            <input
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
              type="text"
              placeholder="Enter a title"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, ingredients: e.target.value };
                });
              }}
              type="text"
              placeholder="Enter ingredients"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, method: e.target.value };
                });
              }}
              type="text"
              placeholder="Enter a method"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, link: e.target.value };
                });
              }}
              type="text"
              placeholder="Enter a img link"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, time: e.target.value };
                });
              }}
              type="number"
              placeholder="Enter a time"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
