import React from "react";
import "./index.css";

export default function Music(props) {
  return (
    <div className="card">
      <p className="card-title">{props.full_title}</p>
    </div>
  );
}