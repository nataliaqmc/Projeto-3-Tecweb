import React from "react";
import "./index.css";




export default function Music(props) {
  function addToPlaylist () {
    var axios = require("axios").default;
    const favoritar = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8000/playlist/'+props.title+'/'+props.artist_names+'/'+'url'+'/', {'title':props.title, 'artist':props.artist_names, 'thumbnail':props.header_image_thumbnail_url})
    }
    return favoritar
  }
  return (
    <div className="card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={props.header_image_thumbnail_url} height="200rem" max_width="200rem"/>
          </div>
          <div class="flip-card-back">
            <div class="plus">
              <img onClick={addToPlaylist()} className="add-button" src="/plus.png" width='30rem'/>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-content">{props.artist_names}</p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}