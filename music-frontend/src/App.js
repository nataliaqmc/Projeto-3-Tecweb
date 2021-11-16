import Music from "./components/Music";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import PaginaInicial from "./PaginaInicial";
import PaginaPlaylist from "./PaginaPlaylist";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/playlist" element={<PaginaPlaylist/>}/>
      </Routes>
    </div>
  );
}

export default App;