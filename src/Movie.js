import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({title, poster, rating, genres, summary}) {

    return(
        <div className="Movie">
            <div className="Movie_Column">
                <div className="Movie_Poster">
                    <MoviePoster poster={poster}/>
                </div>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Rating"><MovieRating rating={rating}/></div>
                <div className="Movie_Genres"><MovieGenres genres={genres}/></div>
                <div className="Movie_Summary"><MovieSummary summary={summary}/>    </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired
}

function MoviePoster({poster}) {
    return(
        <img src={poster}/>
    );
}

function MovieRating({rating}) {
    return(
        <span>{rating}</span>
    )
}

function MovieGenres({genres}) {
    return(
        <span>{genres} </span>
    )
}

function MovieSummary({summary}) {
    return(
        <span>{summary}</span>
    )
}

export default Movie