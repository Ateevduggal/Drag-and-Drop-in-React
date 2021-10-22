import React from "react";
import data from "./data";

const App = () => {
  const drop = (e) => {
    e.preventDefault();
    if(e.dataTransfer.getData("user")) {
      const card_id = e.dataTransfer.getData("user");

      const card = document.getElementById(card_id);
      card.style.display = "block";

      e.target.appendChild(card);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("user", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOverEven = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 fs-1 fw-bold text-center">
            Drag And Drop Tutorial
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <div className="mx-4 text-center">
              <h1>Team 1</h1>
              <div
                className="d-flex flex-column bg-info bga align-items-center"
                onDrop={drop}
                onDragOver={dragOver}
              >
                {data.map((Val, id) => {
                  return (
                    <button
                      onDragStart={dragStart}
                      onDragOver={dragOverEven}
                      draggable="true"
                    >
                      {Val.name}
                      <div>{Val.color}</div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mx-4 tetx-center">
              <h1>Team 2</h1>
              <div
                className="d-flex flex-column bg-warning bga"
                onDrop={drop}
                onDragOver={dragOver}
              > </div>
            </div>
            <div className="mx-4 tetx-center">
              <h1>Team 3</h1>
              <div
                className="d-flex flex-column bg-warning bga"
                onDrop={drop}
                onDragOver={dragOver}
              > </div>
            </div>
            <div className="mx-4 tetx-center">
              <h1>Team 4</h1>
              <div
                className="d-flex flex-column bg-warning bga"
                onDrop={drop}
                onDragOver={dragOver}
              > </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
