import React, {Component} from 'react';
import './MovieCard.css'
import {Link} from "react-router-dom";


class MovieCard extends Component {
    render() {
        let image = "https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path;
        return (
            <Link to={{pathname:`/movie/${this.props.movie.id}`, state:this.props.movie}} className="movie-card">
                {console.log(this.props.movie)}
                <img src={image} alt={ this.props.movie.title + " image"}/>
                <h3>{this.props.movie.title}</h3>
                <p>Rating <span>{this.props.movie.vote_average}</span></p>
            </Link>
        );
    }
}

export default MovieCard;