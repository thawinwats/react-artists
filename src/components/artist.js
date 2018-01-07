import React, { Component } from "react";
import Header from "./herder";
import AlbumList from './AlbumList';

const REQ_URL = "http://localhost:3004/artists";

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ""
    };
  }

  componentDidMount() {
    const _id = this.props.match.params.artistid;

    fetch(`${REQ_URL}/${_id}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        this.setState({
          artist: json
        });
      });
  }

  render() {
    const { artist } = this.state;

    const styles = {
      background: `url('/images/covers/${ artist.cover }.jpg') no-repeat`
    };

    return (
      <div>
        <Header />
        <div className="artist_bio">
          <div className="avatar">
            <span style={ styles } />
          </div>
          <div className="bio">
            <h3>{ artist.name }</h3>
            <div className="bio_text">{ artist.bio }</div>
          </div>
          <AlbumList albumList={ artist.albums }/>
        </div>
      </div>
    );
  }
}

export default Artist;
