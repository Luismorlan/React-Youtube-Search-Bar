import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import _ from 'lodash';
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
        this.videoSearch('pink floyd');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (results) => {
            this.setState({
                videos: results,
                selectedVideo: results[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div className="row">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
