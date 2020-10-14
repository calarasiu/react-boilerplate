// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          {/* <Gif /> */}
        </div>
        <div className="right-scene">
          {/* <GifList /> */}
        </div>
      </div>
    );
  }
}

export default App;
