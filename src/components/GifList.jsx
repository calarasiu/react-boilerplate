import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif className="gif" id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};
export default GifList;
