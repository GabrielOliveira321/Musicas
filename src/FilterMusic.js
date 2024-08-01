import React from "react";
import "./FilterMusic.css"; 

function FilterMusic({ filter }) {
  const handleChange = (event) => {
    filter(event.target.value);
  };

  return (
    <div className="filter-container">
      <input type="text" onChange={handleChange} placeholder="Filtrar músicas..." className="filter-input" />
    </div>
  );
}

export default FilterMusic;