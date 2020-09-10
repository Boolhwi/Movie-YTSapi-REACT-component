import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
    movies : [
      {
        title: "Matrix",
        poster: "https://pds.joins.com/news/component/htmlphoto_mmdata/201408/21/htm_2014082115304968003011.jpg"
      },
      {
        title: "Bellatrix",
        poster: "https://pds.joins.com/news/component/htmlphoto_mmdata/201703/06/d5f6edc7-a9af-4f1b-b8aa-9dbea6e55aa7.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://i.fltcdn.net/contents/979/original_1420700708353_xu8nxqd7vi.jpeg"
      },
      {
        title: "Owlboy",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-d0kUtFdpbYQlZmZPZAmw29JIHa6TahOJjw&usqp=CAU"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "transform",
            poster: "https://ww.namu.la/s/3631ad49c6c3d25f83b713123da742c276a27f351d8bc21dc3a41186f8565fb49d9ecf844b6c68edd5f862f8ae77d44f8fc012246cdf5b4249dae03ec60509e36180a76f5cef7788f22ba97fd764df3b0550e8e405ed69f7494e7e4c86e72aa390b630f5f62b07599e3af51fdba78aa3"
          }
        ]
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.movies.map(movie => {
            return <Movie title={movie.title} poster={movie.poster} />
          })}
        {/* <Movie title={movie[0].title} poster={movie[0].poster}/>
          <Movie title={movie[1].title} poster={movie[1].poster}/>
          <Movie title={movie[2].title} poster={movie[2].poster}/>
          <Movie title={movie[3].title} poster={movie[3].poster}/> */}
      </div>
    );
  }
}

export default App;
