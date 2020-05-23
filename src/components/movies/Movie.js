import React, { Component } from "react";
import Movies from "./Movies";
import { Consumer } from "../../context";

class Movie extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { movie } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Favourite Movies</span>
              </h1>
              {movie.map((movies) => (
                <Movies key={movies.id} movies={movies} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movie;
