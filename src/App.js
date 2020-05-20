import React from 'react';
import logo from './logo.svg';
import './App.css';

const axios = require('axios').default;

class App extends React.Component {
    state = {
        movie: undefined
    };

    componentDidMount() {
        this.getMoviesList('a')
    }

    getMoviesList(searchText) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=58f5191ea5d531ac90bb1fcc2d1119de&query=' + searchText)
            .then( (response) => {
                this.setState({movie: response.data.results[0]});
                console.log(this.state.movie);
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally( () =>{
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        );
    }
}

export default App;
