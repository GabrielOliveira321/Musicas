import React, { useState } from "react";
import "./Album.css";

function Album({ albums, createAlbum, addSongToAlbum, viewAlbum, selectedAlbum }) {
  const [albumName, setAlbumName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [selectedAlbumName, setSelectedAlbumName] = useState("");

  const handleCreateAlbum = () => {
    createAlbum(albumName);
    setAlbumName("");
  };

  const handleAddSongToAlbum = () => {
    if (selectedAlbumName && songTitle) {
      addSongToAlbum(selectedAlbumName, songTitle);
      setSongTitle("");
    }
  };

  return (
    <div className="album-container">
      <h2>Álbuns</h2>
      <div className="album-creation">
        <input
          type="text"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          placeholder="Nome do Álbum"
        />
        <button onClick={handleCreateAlbum}>Criar Álbum</button>
      </div>
      <div className="album-list">
        {albums.map((album, index) => (
          <div key={index} className="album-item" onClick={() => viewAlbum(album.name)}>
            {album.name}
          </div>
        ))}
      </div>
      {selectedAlbum && (
        <div className="album-details">
          <h3>{selectedAlbum.name}</h3>
          <ul>
            {selectedAlbum.songs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
          <input
            type="text"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            placeholder="Nome da Música"
          />
          <button onClick={handleAddSongToAlbum}>Adicionar Música</button>
        </div>
      )}
    </div>
  );
}

export default Album;
