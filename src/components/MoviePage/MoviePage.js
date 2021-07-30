import React, {Component} from 'react';
import './MoviePage.css'
import axios from "axios";

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        this.findAllMovies();
    }

    findAllMovies() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=cd7f2e1e69891f18b37b1203b8add2b6`)
            .then(response => response.data)
            .then((data) => {
                this.setState({genres: data.genres, isLoading: false})
            });
    }

    toYearFormat = (date) => {
        return date.split('-')[0]
    }

    isAdult = (adult) => {
        return adult === true ? "Yes" : "No"
    }


    genreList = () => {
        let genres = []
        this.state.genres.map((genre) => {
            if(this.props.location.state.genre_ids.includes(genre.id)){
                genres.push(" " + genre.name)
            }
        })
        return genres + ""
    }

    render() {
        let image = "https://image.tmdb.org/t/p/w185" + this.props.location.state.poster_path;
        return (
                <div className="movie-page">
                    <div className="movie-page__inner">
                        <img src={image} alt={this.props.location.state.title + " image"}/>
                        <div className="movie-info">
                            <h3>{this.props.location.state.title}</h3>
                            <h4>Year: <span>{this.toYearFormat(this.props.location.state.release_date)}</span></h4>
                            <h4>Genre: <span>{this.genreList()}</span></h4>
                            <h4>Adult: <span>{this.isAdult(this.props.location.state.adult)}</span></h4>
                            <h4>Rating: <span>{this.props.location.state.vote_average}</span></h4>
                            <span>Overview:</span>
                            <p>{this.props.location.state.overview}</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MoviePage;