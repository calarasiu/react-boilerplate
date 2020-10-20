import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.selectGif) {
      debugger
      // eslint-disable-next-line react/destructuring-assignment
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <div className="selected-gif">
        <img src={src} className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;
