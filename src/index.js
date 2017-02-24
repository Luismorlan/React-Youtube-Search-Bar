import ReactDOM from 'react-dom';
import React from 'react';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCdAXs0YXxqGUKjb4sZsmsF_hHq_f3PJmY';

const App = () => {
    return (
            <div>
            <SearchBar />
            </div>
            );
}

ReactDOM.render(<App />, document.querySelector('.container'));
