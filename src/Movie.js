import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, poster, rating, genres, summary}) {

    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
            <MovieRating rating={rating}/>
            <MovieGenres genres={genres}/>
            <MovieSummary summary={summary}/>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
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