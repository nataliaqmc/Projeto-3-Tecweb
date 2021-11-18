import React from "react";
import "./index.css";
import { useEffect, useState } from "react";


export default function MusicPlaylist(props) {
  return (
    <div className="card">
      <p className="card-title">{props.song}</p>
      <p className="card-artist">{props.artist}</p>
      <img src={props.thumbnail} width="200rem" />
    </div>
  );
}