import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        // this.onInputChange = this.onInputChange.bind(this);
        this.state = {term : ''};
    }

    render() { // Always define a render function when implement Component
        // console.log(this);
        return <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.setState({term: event.target.value}) }
                />
            </div>;
    }

    // onInputChange(event) {
    //     // this.setState({ term : event.target.value });
    //     console.log(this);
    // }
}

export default SearchBar;