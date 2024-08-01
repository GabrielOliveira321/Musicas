import React from "react";
import "./Musicas.css";

function Musicas({ title, description, onAddToAlbum }) {
  return (
    <div className="music-card">
      <h2 className="music-title">{title}</h2>
      <p className="music-description">{description}</p>
      <button onClick={onAddToAlbum} className="add-to-album-button">Adicionar ao Álbum</button>
    </div>
  );
}

export default Musicas;
