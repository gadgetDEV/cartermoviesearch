import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "",
    body: ""
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063`
    )
      .then(response => response.motionpicture())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //componentWillMount() {
  //console.log("componentWillMount...");
  //}

  //componentDidUpdate() {
  //console.log("componentDidUpdate...");
  //}

  //componentWillMount() {
  //console.log("componentWillUpdate...");
  //}

  //componentWillReceiveProps(nextProps, nextState) {
  //console.log("componentWillReceiveProps...");
  //}

  //static getDerivedStateFromProps(nextProps, prevState) {
  //return {
  //test: "something";
  //};
  //} 

  //getSnapshotBeforeUpdate(prevProps, prevState) {
  //console.log("getSnapshotBeforeUpdate...");
  //}

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
