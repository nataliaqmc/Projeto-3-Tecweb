import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"

export default function PaginaSearch() {
  var axios = require("axios").default;
  const [artist, setArtist] = useState("");
  const [search, setSearch] = useState([]);
  var searchArtist = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: 'Taylor Swift'},
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  const artistChanged = (event) =>{
      setArtist(event.target.value);
  }
  const Search = ()

   => {
      event.preventDefault();
      axios
        .request(searchArtist)
        .then((res) => setSearch(res.data.response.hits));
  }
 return (
    <div>
      <div className="App-header">
          <div class="title">Music</div>
          <Link to="/playlist" className="links">
            <div class="playlist">Playlist</div>
          </Link>
      </div>
      <div>
        <form className="form-card" onSubmit={CreSearch
               put
  
                ssName="form-card-title"
                   e="text"
                   e="artist"
                   ceholder="Type artist's name..."
                   ue={artist}
                   hange={titleChanged}
               
               tton className="btn" type="submit">Search</button>
           form>
      </div>
      <div>
        <input type="text" name="busca" placeholder="Type artist's name" ></input>
        <button>Search</button>
      </div>
      <div className="App">
        {artistSongs.map((songs)=>(
          <Music title={songs.title} artist_names={songs.artist_names} header_image_thumbnail_url={songs.header_image_thumbnail_url}>{artistSongs} </Music>
        ))}
      </div>
    </div>
  );
};