import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/pagination";
import { Paginate } from "../utills/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4, 
    sortColumn: {path: 'title', order: 'asc'}
  };
  componentDidMount() {
    const genres = [{_id:'', name: "All Genres"}, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (path) => {
    const sortColumn = {...this.state.sortColumn};
    if(sortColumn.path === path)
    sortColumn.order = (sortColumn.order = 'asc') ? 'desc': 'asc';
    else {
    sortColumn.path = path;
    sortColumn.order = 'asc';
    this.setState({sortColumn});}
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = Paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItems={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>There {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;