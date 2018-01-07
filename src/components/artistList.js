import React from "react";
import { Link } from "react-router-dom";

const ArtistList = props => {
  const { allArtist } = props;

  const list = allArtist => {
    if (allArtist) {
      return allArtist.map(item => {
        const styles = {
          background: `url('/images/covers/${ item.cover }.jpg') no-repeat`
        };

        return (
          <Link
            key={ item.id }
            to={`/artist/${ item.id }`}
            className="artist_item"
            style={ styles }
          >
            <div>{ item.name }</div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="artists_list">
      <h4>Browse the artist</h4>
      { list(allArtist) }
    </div>
  );
};

export default ArtistList;
