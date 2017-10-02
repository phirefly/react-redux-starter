import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import Dotenv from 'dotenv';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
require('dotenv').config();

// Create a new component to produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: process.env.API_KEY, term: 'mega ramp'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })

      console.log(this.state);
    });
  }

  render() { //render is invoked every time the state is updated
    return (
      <div>
       <SearchBar />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList onVideoSelected={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
      </div>
      );
      // This is JSX, which gets transpiled to javascript.
      // Test here: http://babeljs.io/repl
  }
}
// Put the component HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));   // To make an instance of the App class, we wrap it in a JSX tag

