import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Movies extends Component {
  state = {
    showMoviesInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063/${id}`
      );
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, film, year } = this.props.movies;
    const { showMoviesInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showMoviesInfo: !this.state.showMoviesInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "orange" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`movies/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "yellow",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showMoviesInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Name: {name}</li>
                  <li className="list-group-item">Film: {film}</li>
                  <li className="list-group-item">year: {year}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};

export default Movies;
