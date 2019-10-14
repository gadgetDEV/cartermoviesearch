import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddMovies extends Component {
  state = {
    name: "",
    film: "",
    year: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, film, year } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "name is required" } });
      return;
    }

    if (film === "") {
      this.setState({ errors: { film: "film is required (optional)" } });
      return;
    }

    if (year === "") {
      this.setState({ errors: { year: "year is required (optional)" } });
      return;
    }

    const newMovie = {
      name,
      film,
      year
    };

    const res = await axios.post(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063`,
      newMovie
    );

    dispatchEvent({ type: "ADD_MOVIES", payload: res.data });

    this.setState({
      name: "",
      film: "",
      year: "",
      error: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, film, year, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Movies</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Motion Picture"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Film"
                    name="film"
                    type="film"
                    placeholder="Enter Film (optional)"
                    value={film}
                    onChange={this.onChange}
                    error={errors.film}
                  />
                  <TextInputGroup
                    label="Year"
                    name="year"
                    placeholder="Enter year (optional)"
                    value={year}
                    onChange={this.onChange}
                    error={errors.year}
                  />
                  <input
                    type="submit"
                    value="Add Movie"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddMovies;
