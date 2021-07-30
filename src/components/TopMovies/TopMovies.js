import React, {Component} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './TopMovies.css'

class TopMovies extends Component {
    render() {
        return (
            <div>
                <h2>Найкращі фільми</h2>
                <div className="movie-list">
                    {this.props.moviesToShow.length !== 0 ? this.props.moviesToShow.map((movie) => (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))
                        :
                        <h4>Не знайдено</h4>
                    }
                </div>
            </div>
        );
    }
}

export default TopMovies;