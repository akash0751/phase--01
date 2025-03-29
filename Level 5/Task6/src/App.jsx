import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./Component/MovieDetails"
import './App.css'
import Home from "./Component/Home";



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    );
}

export default App;

