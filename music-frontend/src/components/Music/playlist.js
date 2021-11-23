import React from "react";
import "./index.css";
import { useEffect, useState } from "react";


export default function MusicPlaylist(props) {

  function deleteFromPlaylist () {
    var axios = require("axios").default;
    const favoritar = (event) => {
      event.preventDefault();
      axios.delete('http://localhost:8000/playlist/delete/'+props.song+"/"+props.artist+"/", {'song':props.title, 'artist':props.artist_names, 'thumbnail':props.header_image_thumbnail_url})
    }
    return favoritar
  }

  return (
    <div className="card">
      <button onClick={deleteFromPlaylist} className="delete-button"> X </button>
      <p className="card-title">{props.song}</p>
      <p className="card-artist">{props.artist}</p>
      <img src={props.thumbnail} width="200rem" />
    </div>
  );
}