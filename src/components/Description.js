import React from 'react'

const Description = ({
                         title, runtime, revenue,
                         overview, releaseDate, voteAverage, genres, productionCompanies,tagline
                     }) => {
    return (
        <div className={"movieDescription"}>
            <h1  className={"h1"}>{title}</h1>
            <p className="movieDescription__information">
                {tagline}
            </p>
            <p className={"strong"} style={{marginBottom: 30}}>{overview}</p>
            <p className="movieDescription__information">
                {genres
                    .map(genre => genre.name)
                    .join(", ")}
            </p>
            <p className={"strong"} style={{marginBottom: 30}}>
                {productionCompanies
                    .map(company => company.name)
                    .join(", ")}
            </p>
            <div className={"row"}>
                <span className={"flexed-column"}>
            <p className={"strong"}>Original Release:</p>
            <p className="movieDescription__information">
                {releaseDate}
            </p>
                </span><span className={"flexed-column"}>
                <p className={"strong"}>Running Time:</p>
                <p className="movieDescription__information">
                    {runtime} minutes
                </p>
            </span>
            </div>
            <div className={"row"}>
                <span className={"flexed-column"}>
            <p className={"strong"} >Box Office:</p>
            <p className="movieDescription__information">
                {revenue > 0 ? revenue.toLocaleString() : "Unknown"}
            </p>
                </span><span className={"flexed-column"}>
                <p className={"strong"}>Vote Average:</p>
                <p className="movieDescription__information">
                    {voteAverage > 0 ? voteAverage + ' / 10'  : "Unknown"}
                </p>
            </span>
            </div>
        </div>
    );
};


export default Description
