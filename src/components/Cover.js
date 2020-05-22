import React from 'react'

const Cover = ({posterPath}) => {
    return (
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
                 style={{backgroundColor: 'grey',flex:1}}/>
    );
};
export default Cover
