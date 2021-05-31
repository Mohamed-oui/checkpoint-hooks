import { moviedata } from "./data";
import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  
  const handleChange = (elm) => {
    setTitle(elm.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rate={rate}
      />
      <MovieList
        movielist={movielist.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rate >= rate
        )}
      />
            <AddMovie handleAdd={handleAdd} />

    </div>
  );
}

export default App;