import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"

function PaginaInicial() {
  var axios = require("axios").default;
  const [artists, setArtists] = useState([]);
  const [musics, setMusics] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);
  const [search, setSearch] = useState([]);
  const [param, setParam] = useState([]);

  // Requisição artista pelo id:
  var artist_by_id = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775',
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(artist_by_id)
      .then((res) => setArtists(res.data.response.artist));
  }, []);
  console.log(artists); // Devolve os hits do artista 

  // Requisição musica pelo id:
  var songs_by_id = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/songs/3075800',
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(songs_by_id)
      .then((res) => setMusics(res.data.response.song));
  }, []);


  // Requisição músicas do artista:
  var songs_by_artist_id = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775/songs',
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(songs_by_artist_id)
      .then((res) => setArtistSongs(res.data.response.songs));
  }, []);
  
  
  return (
    <div>
      <div className="App-header">
        <Link to="/search" className="links">
          <img src="/search.png" width='30rem'/>
        </Link>
        <div class="title">Music</div>
        <Link to="/playlist" className="links">
          <div class="playlist">Playlist</div>
        </Link>
      </div>
      <div className="App">
        {artistSongs.map((songs)=>(
          <Music title={songs.title} artist_names={songs.artist_names} header_image_thumbnail_url={songs.header_image_thumbnail_url}>{artistSongs} </Music>
        ))}
      </div>
    </div>
  );
}

export default PaginaInicial;