import React from 'react';
import './styles/App.css';
import Movie from "./components/Movie";
import ReactSearchBox from 'react-search-box'
import ApiConfig from 'services/config'

const axios = require('axios').default;

class App extends React.Component {
    state = {
        movie: {
            backdrop_path: '',
            production_companies:[],
            genres:[]
        },
        list: [],
    };

    componentWillMount() {
        //sample movie : X Men
        this.getMovieDetails(127585)
    }

    getMoviesList(searchText) {
        axios.get(ApiConfig.BASE_URL + '/search/movie' + ApiConfig.KEY + '&query=' + searchText)
            .then( (response) => {
                this.setState({
                    list: response.data.results.map(item => ({
                        key: item.id, value: item.title
                    }))
                });
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    getMovieDetails(id){
        axios.get(ApiConfig.BASE_URL + '/movie/' + id + ApiConfig.KEY)
            .then( (response) => {
                this.setState({movie:response.data})
                console.log(this.state.movie)
            })
            .catch( (error) => {
                console.log(error);
            })
    }
    render() {
        const {movie, list} = this.state;
        return (
            <div className="App" style={{ flex:1,
                backgroundImage: `linear-gradient(to right, rgba(9, 66, 59, 0.5) 0%, rgba(9, 28, 37, 0.5) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}>
                <div className="searchBox__container">
                    <ReactSearchBox
                        placeholder="Search Movie Title..."
                        data={list}
                        onChange={text => this.getMoviesList(text)}
                        onSelect={record => this.getMovieDetails(record.key)}
                    />
                </div>
                <Movie movie={movie}/>
            </div>
        );
    }
}

export default App;
