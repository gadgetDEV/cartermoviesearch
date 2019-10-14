import React, { Component } from "react";
import Movies from "./Movies";
import { Consumer } from "../../context";

class Movie extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movie } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Movie</span>
                List
              </h1>
              {movie.map(movies => (
                <Movies key={movie.id} movies={movies} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movie;
