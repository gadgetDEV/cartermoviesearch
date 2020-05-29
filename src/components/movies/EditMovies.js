import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditMovies extends Component {
  state = {
    name: "",
    film: "",
    year: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=42cedafc2686fc5395ac07cecad44063&language=en-US&page=1${id}`
    );

    const movies = res.data.results;

    this.setState({
      name: movies.name,
      film: movies.film,
      year: movies.year
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, film, year } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (film === "") {
      this.setState({ errors: { film: "Film is required" } });
      return;
    }

    if (year === "") {
      this.setState({ errors: { year: "Year is required" } });
      return;
    }

    const updMovies = {
      name,
      film,
      year
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063/${id}`,
      updMovies
    );

    dispatch({ type: "UPDATE_MOVIES", payload: res.data });

    this.setState({
      name: "",
      film: "",
      year: "",
      errors: {}
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
              <div className="card-header">Edit Movies</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Movie Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Film"
                    name="film"
                    type="film"
                    placeholder="Enter Film Category"
                    value={film}
                    onChange={this.onChange}
                    error={errors.film}
                  />
                  <TextInputGroup
                    label="Year"
                    name="year"
                    placeholder="Enter Year"
                    value={year}
                    onChange={this.onChange}
                    error={errors.year}
                  />
                  <input
                    type="submit"
                    value="Update Movies"
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

export default EditMovies;
