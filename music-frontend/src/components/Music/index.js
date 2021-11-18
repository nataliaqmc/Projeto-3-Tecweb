import React from "react";
import "./index.css";
import { useEffect, useState } from "react";


function addToPlaylist (song, artist, thumbnail) {
  var axios = require("axios").default;
  const favoritar = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/playlist/'+song+'/'+artist+'/'+thumbnail+'/', {'song':song, 'artist':artist, 'thumbnail':thumbnail})
  }
  return favoritar
}

export default function Music(props) {
  return (
    <div className="card">
      <p className="card-title">{props.title}</p>
      <p className="card-artist">{props.artist_names}</p>
      <p className="card-thumbnail">{props.header_image_thumbnail_url}</p>
      <img onClick={addToPlaylist(props.title, props.artist_names, "url")} className="add-button" src="/plus.png"/>
    </div>
  );
}