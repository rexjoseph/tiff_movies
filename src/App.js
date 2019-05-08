import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {} // state

  // default search term parameter
  this.performSearch('Gandhi')
}

// search function 
  performSearch(searchTerm) {
    console.log('Perform something')
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=0707c7b36e972720fd24c63c4f2e45c9&query=" + searchTerm;
    // jquery ajax :D
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;
        
        // retrieving new found results
       var movieRows = []
       results.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
         const newMovieRow = <MovieRow key={movie.id} movie={movie} />
         movieRows.push(newMovieRow)
       })

       // re-enstating the state
       this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log(`Error: ${err}`);
      }
    })
  }

  searchChangeHandler(e) {
    const boundObject = this;
    const searchTerm = e.target.value
    boundObject.performSearch(searchTerm);
  }

  render() {
    return(
      // navigation
      <header className="nav_header">
       <nav className="navbar">
         <div className="container">
         <ul className="flex">
           <li id="logo"><a href="https://www.tiff.net/">tiff</a></li>
           <li><a href="#">Festivals</a></li>
           <li><a href="#">Year-Round</a></li>
           <li><a href="#">Join + Give</a></li>
           <li><a href="#">Visits</a></li>
           <li><a href="#">The Review</a></li>
           <li><a href="#">Shop</a></li>
         </ul>
         </div>
       </nav>
       <article class="container">
       <form>
       <input id="search" type="search" onChange={this.searchChangeHandler.bind(this)} placeholder="Search movies by title ..." />
       </form>
          {this.state.rows}
       </article>
     </header>
    )
  }
}
  

export default Movie;
