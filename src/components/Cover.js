import React from 'react'

const Cover = ({posterPath}) => {
    return (
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`} alt=""
                 style={{backgroundColor: 'grey',flex:1}}/>
    );
};
export default Cover
