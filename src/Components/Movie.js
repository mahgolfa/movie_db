import React from 'react'

const Movie = ({movie}) => {
    return (
        <div style={{flexDirection:'row', position:'center',}}>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""
                 style={{backgroundColor: 'grey',}}/>

        </div>
    );
};


export default Movie
