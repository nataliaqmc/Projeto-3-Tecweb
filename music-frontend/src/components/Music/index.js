import React from "react";
import "./index.css";
import { useEffect, useState } from "react";


function addToPlaylist (song, artist, thumbnail) {
  var axios = require("axios").default;
  const favoritar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/playlist/'+song+'/'+artist+'/'+thumbnail+'/', {'title':song, 'artist':artist, 'thumbnail':thumbnail})
  }
  return favoritar
}

export default function Music(props) {
  return (
    <div className="card">
      <img onClick={addToPlaylist(props.title, props.artist_names, "url")} className="add-button" src="/plus.png" width='50rem'/>
      <p className="card-title">{props.title}</p>
      <p className="card-artist">{props.artist_names}</p>
      <img src={props.header_image_thumbnail_url} width="200rem" />
    </div>
  );
}