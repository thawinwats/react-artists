import React, { Component } from 'react';

const AlbumList = ({albumList}) => {

  const showList = (albumList) => {

    if(albumList){
      return albumList.map( (album, index) => {
        return <img key={index} src={`/images/albums/${album.cover}.jpg`} alt={album.title}/>
      })
    }
    
  }

  return (
    <div className="albums_list">
      { showList(albumList) }
    </div>
  );
}

export default AlbumList;
