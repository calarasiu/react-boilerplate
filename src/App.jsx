/* eslint-disable no-useless-constructor */
/* eslint-disable no-dupe-keys */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';

const GIPHY_API_KEY = `0f11nWnv3wBkygAvXjreamoj7uvPLa63`;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "ZdZldMYpD3UdNpbp95"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className=".right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
