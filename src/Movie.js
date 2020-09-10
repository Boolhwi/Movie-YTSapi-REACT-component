import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Movie({title, poster}) {

    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

function MoviePoster({poster}) {

    return(
        <img src={poster}/>
    );
}

export default Movie