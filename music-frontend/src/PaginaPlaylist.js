import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
function PaginaPlaylist() {
  var axios = require("axios").default;
  
  
  return (
    <div>
      <div className="App-header">
          <Link to="/" className="links">
            <div>Music</div>
          </Link>
      </div>
    </div>
  );
}

export default PaginaPlaylist;