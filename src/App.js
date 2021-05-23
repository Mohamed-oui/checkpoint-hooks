import { moviedata } from "./data";
import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
function App() {
  const [movielist, ] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (elm) => {
    setTitle(elm.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  
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
    </div>
  );
}

export default App;