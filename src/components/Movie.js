import React from 'react'
import Cover from "./Cover";
import Description from "./Description";

const Movie = ({movie}) => {
    const {
        title, runtime, revenue,
        overview, release_date, poster_path,vote_average,genres,production_companies,tagline
    } = movie;
    return (
        <div className={"row"}>
            <Cover posterPath={poster_path}/>
            <Description title={title}
                         runtime={runtime}
                         revenue={revenue}
                         overview={overview}
                         releaseDate={release_date}
                         voteAverage={vote_average}
                         genres={genres}
                         productionCompanies={production_companies}
                         tagline={tagline}
                  />
        </div>
    );
};


export default Movie
