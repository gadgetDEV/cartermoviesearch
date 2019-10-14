import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/movies/Movie";
import AddMovies from "./components/movies/AddMovies";
import EditMovies from "./components/movies/EditMovies";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Movie Search" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Movie} />
                <Route exact path="/movies/add" component={AddMovies} />
                <Route exact path="/movies/edit/:id" component={EditMovies} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
