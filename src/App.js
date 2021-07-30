import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";
import Line from "./components/Line/Line";
import TopMovies from "./components/TopMovies/TopMovies";
import axios from "axios";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRequest: '',
            movies: [],
            findedMovies: [],
        }
        this.inputSearch = this.inputSearch.bind(this);

    }


    componentDidMount() {
        this.findAllMovies();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.findMovie();

    }

    findAllMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=cd7f2e1e69891f18b37b1203b8add2b6&language=en-US&page=1`)
            .then(response => response.data)
            .then((data) => {
                this.setState({movies: data.results, isLoading: false})
            });
    }

    async findMovie() {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cd7f2e1e69891f18b37b1203b8add2b6&language=en-US&query=${this.state.searchRequest}&page=1&include_adult=false`)
            .then(response => response.data)
            .then((data) => {
                this.setState({findedMovies: data.results, isLoading: false})
            });
    }

    inputSearch(e) {
        this.setState({searchRequest: e})
    }

    render() {
        const {movies, findedMovies, searchRequest} = this.state;
        let moviesToShow = searchRequest !== '' ? findedMovies : movies;
        return (
                <div className="container">
                    <div className="content">
                        <div className="content__inner">
                            <Router>
                                <Header search={this.inputSearch}/>
                                <Line/>
                                <Switch>
                                    <Route exact path={"/"} render={() => <TopMovies moviesToShow={moviesToShow}/>}/>
                                    <Route exact path="/movie/:id" render={(props) => <MoviePage {...props}/>}/>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
