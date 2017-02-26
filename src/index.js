import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCdAXs0YXxqGUKjb4sZsmsF_hHq_f3PJmY';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        YTSearch({key: API_KEY, term: 'pink floyd'}, (results) => {
            this.setState({
                videos: results,
                selectedVideo: results[0]
            });
        });
    }
    render() {
        return (
            <div className="row">
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
