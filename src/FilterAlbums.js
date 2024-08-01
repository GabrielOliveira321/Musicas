import React from "react";
import "./FilterAlbums.css";

function FilterAlbums({ filter }) {
  const handleChange = (event) => {
    filter(event.target.value);
  };

  return (
    <div className="filter-albums-container">
      <input type="text" onChange={handleChange} placeholder="Pesquisar álbuns..." className="filter-albums-input" />
    </div>
  );
}

export default FilterAlbums;
