import React, { Component } from "react";

import Banner from "./banner";
import ArtistList from "./artistList";

const URL_ARTIST = "http://localhost:3004/artists";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ""
    };
  }

  componentDidMount() {
    fetch(URL_ARTIST, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          artist: json
        })
      });
  }

  render() {
    return (
      <div>
        <Banner />
        <ArtistList allArtist={this.state.artist} />
      </div>
    );
  }
}

export default Home;
