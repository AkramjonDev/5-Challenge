import { useContext } from "react";
import { dataContext } from "../../context";
function Recipes() {
  const {
    state: { data },
    deleteItem,
  } = useContext(dataContext);
  return (
    <div className="mt-10">
      <div className="container">
        <input type="text" />
        <div className="grid grid-cols-3 gap-4">
          {data
            ? data.map(({ id, title, ingredients, method, link, time }) => {
                return (
                  <>
                    <div
                      key={id}
                      className="card card-compact w-96 bg-base-100 shadow-xl relative"
                    >
                      <figure>
                        <img src={link} alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{ingredients}</p>
                        <p>{time} minutes</p>
                      </div>
                      <button
                        onClick={() => {
                          deleteItem(id);
                        }}
                        className="btn btn-error absolute right-1 top-1"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                );
              })
            : "No data"}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
