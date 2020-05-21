import React from 'react';
import './App.css';
import Movie from "./Components/Movie";

const axios = require('axios').default;

class App extends React.Component {
    state = {
        movie: {
            backdrop_path: '',
            production_companies:[],
            genres:[]
        }
    };

    componentWillMount() {
        this.getMovieDetails(127585)
    }

    getMoviesList(searchText) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=58f5191ea5d531ac90bb1fcc2d1119de&query=' + searchText)
            .then( (response) => {
                this.setState({movie: response.data.results[0]});
                console.log(this.state.movie)
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally( () =>{
            });
    }

    getMovieDetails(id){
        axios.get('https://api.themoviedb.org/3/movie/'+ id + '?api_key=58f5191ea5d531ac90bb1fcc2d1119de')
            .then( (response) => {
                this.setState({movie:response.data})
                console.log(this.state.movie)
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally( () =>{
            });
    }
    render() {
        const {movie} = this.state;

        return (
            <div className="App" style={{ flex:1,
                backgroundImage: `linear-gradient(to right, rgba(9, 66, 59, 0.5) 0%, rgba(9, 28, 37, 0.5) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}>
                <Movie movie={movie}/>
            </div>
        );
    }
}

export default App;
