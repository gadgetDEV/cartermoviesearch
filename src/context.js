import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_MOVIES":
      return {
        ...state,
        movie: state.movie.filter((movies) => movies.id !== action.payload),
      };
    case "ADD_MOVIES":
      return {
        ...state,
        movie: [action.payload, ...state.movie],
      };
    case "UPDATE_MOVIES":
      return {
        ...state,
        movie: state.movie.map((movies) =>
          movies.id === action.payload.id ? (movies = action.payload) : movies
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    movie: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063"
    );

    this.setState({ movie: res.data.results });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
