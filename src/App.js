import { useState } from "react";
import Musicas from "./Musicas";
import FilterMusic from "./FilterMusic";
import Album from "./Album";
import FilterAlbums from "./FilterAlbums";
import "./All.css";

// infelizmente devido ao excesso de trabalho, só consegui finalizar o front-end e sem o useEffect para achamar minha api; 

const Musics = [
  {
    id: '1',
    title: 'Cumadade',
    descripton: 'musica muito boa',
  },
  {
    id: '2',
    title: 'Alegria da Vida',
    descripton: 'música que traz alegria e paz',
  },
  {
    id: '3',
    title: 'Noite Estrelada',
    descripton: 'música para relaxar e apreciar a noite',
  },
  {
    id: '4',
    title: 'Caminhos do Vento',
    descripton: 'música que inspira liberdade e aventura',
  },
  {
    id: '5',
    title: 'Ondas do Mar',
    descripton: 'música suave e relaxante, perfeita para meditação',
  },
];

function App() {
  const [musicas, setMusicas] = useState(Musics);
  const [filterMu, setFilterMu] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [filterAlbums, setFilterAlbums] = useState("");

  const filterRed = musicas.filter((e) => {
    return e.title.toLowerCase().includes(filterMu.toLowerCase());
  });

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(filterAlbums.toLowerCase())
  );

  const textInput = (text) => { setFilterMu(text) }

  const createAlbum = (name) => {
    setAlbums([...albums, { name, songs: [] }]);
  };

  const addSongToAlbum = (albumName, song) => {
    const updatedAlbums = albums.map(album => {
      if (album.name === albumName) {
        return { ...album, songs: [...album.songs, song] };
      }
      return album;
    });
    setAlbums(updatedAlbums);
    setShowModal(false);
  };

  const viewAlbum = (albumName) => {
    const album = albums.find(album => album.name === albumName);
    setSelectedAlbum(album);
  };

  const handleAddToAlbum = (song) => {
    setSelectedSong(song);
    setShowModal(true);
  };

  return (
    <div className="app-container">
      <h1 className="title">Dupla Tião Carreiro e Pardinho</h1>
      <FilterMusic filter={textInput} />
      <section className="music-list">
        {(filterMu === "" ? musicas : filterRed).map((musica) => (
          <Musicas
            key={musica.id}
            title={musica.title}
            description={musica.descripton}
            onAddToAlbum={() => handleAddToAlbum(musica.title)}
          />
        ))}
      </section>
      <FilterAlbums filter={setFilterAlbums} />
      <Album
        albums={filteredAlbums}
        createAlbum={createAlbum}
        addSongToAlbum={addSongToAlbum}
        viewAlbum={viewAlbum}
        selectedAlbum={selectedAlbum}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Adicionar "{selectedSong}" ao Álbum</h3>
            <select onChange={(e) => addSongToAlbum(e.target.value, selectedSong)}>
              <option value="">Selecione um álbum</option>
              {albums.map((album, index) => (
                <option key={index} value={album.name}>
                  {album.name}
                </option>
              ))}
            </select>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
