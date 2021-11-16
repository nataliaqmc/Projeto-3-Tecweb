import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
function PaginaPlaylist() {
  var axios = require("axios").default;
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/playlist/')
      .then((res) => setPlaylist(res.data));
  }, []);
  console.log(playlist);
  
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