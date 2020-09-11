import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {

  }

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
      title={movie.title}
      poster={movie.medium_cover_image}
      rating={movie.rating}
      genres={movie.genres}
      summary={movie.summary}
      key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then(res => res.json())
    .then(res => res.data.movies)
}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"
          }
        {/* <Movie title={movie[0].title} poster={movie[0].poster}/>
          <Movie title={movie[1].title} poster={movie[1].poster}/>
          <Movie title={movie[2].title} poster={movie[2].poster}/>
          <Movie title={movie[3].title} poster={movie[3].poster}/> */}
      </div>
    );
  }
}

export default App;
