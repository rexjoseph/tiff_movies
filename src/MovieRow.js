import React from 'react';

class MovieRow extends React.Component {
  viewMovie() {
    // redirect to movie info page depending on the clicked
    // movie and it's ID
    const urlRedirect = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
    window.location.href = urlRedirect;
  }
    render() {
      // movie info
        return (
        <div className="grid" key={this.props.movie.id}>
          <div className="center">
              <img src={this.props.movie.poster_src} alt="banner" />
              <h1>{this.props.movie.title}</h1>
              <p>{this.props.movie.overview}</p>
              <p id="popularity">Popularity: {this.props.movie.popularity}</p>
              <p id="release">Release Date: {this.props.movie.release_date}</p>
              <input id="btn" type="button" onClick={this.viewMovie.bind(this)} value="See Info" />
            </div>
        </div>
        )
    }
}

export default MovieRow;