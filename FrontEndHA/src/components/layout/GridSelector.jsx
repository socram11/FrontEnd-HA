import React from "react";

const GridSelector = ({ setColumns }) => {
  const handleSelect = (columns) => {
    setColumns(columns);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="bg-transparent text-black"
        onClick={() => handleSelect(4)}
      >
        x3
      </button>
      <button
        type="button"
        className="bg-transparent text-black"
        onClick={() => handleSelect(3)}
      >
        x4
      </button>
      <button
        type="button"
        className="bg-transparent text-black"
        onClick={() => handleSelect(2)}
      >
        x6
      </button>
    </div>
  );
};

export default GridSelector;
