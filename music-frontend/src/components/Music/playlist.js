import React from "react";
import "./index.css";

export default function MusicPlaylist(props) {

  function deleteFromPlaylist () {
    var axios = require("axios").default;
    const deletar = (event) => {
      event.preventDefault();
      axios.delete('http://127.0.0.1:8000/playlist/delete/'+props.song+"/"+props.artist+"/", {'song':props.title, 'artist':props.artist_names, 'thumbnail':props.header_image_thumbnail_url})
    }
    return deletar
  }

  return (
    <div className="card">
      <img onClick={deleteFromPlaylist()} className="delete-button" src="/x.png" width='20rem'/>
      <p className="card-title">{props.song}</p>
      <p className="card-artist">{props.artist}</p>
      <img src={props.thumbnail} width="200rem" />
    </div>
  );
}