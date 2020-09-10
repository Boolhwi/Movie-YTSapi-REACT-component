import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
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

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          movies.map(movie => {
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
