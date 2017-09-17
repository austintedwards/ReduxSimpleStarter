import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyCcCc1PNHYLw2pVHikkVHnBLCAOQGer94Q";



// create a new componet with HTML
class App extends Component{
  constructor(props){
    super(props);
    this.state={videos: [],
    selectedVideo:null
    }

    YTSearch({key: API_KEY, term: 'Trixie Mattel'}, (videos) =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    })
  }
  render(){
    return (
      <div>
      <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
        <VideoDetail video={this.state.selectedVideo}/>

    </div>
  );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
