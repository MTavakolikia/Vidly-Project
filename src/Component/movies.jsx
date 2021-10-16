import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/Pagination';
import ListGroup from './common/listGroup';
import { Paginate } from '../Utils/Paginate';
import MoviesTable from './moviesTable';
class Movies extends Component {
        constructor(){
          super();
          this.state={
              Movies:[],
              genre:[],
              pageSize:4,
              currentPage:1
          }
        }
        
  componentDidMount(){
    const genre=[{name:"All Genres"},...getGenres()]
    this.setState({
      Movies:getMovies(),
      genre
    })
  }
        handleDelete = (Movie) =>{
            let Movies= this.state.Movies.filter( (m) => m._id !== Movie._id )
            this.setState({
                Movies
            })
        }
        
  handleLike= movie => {
    const Movies=[...this.state.Movies];
    const index=Movies.indexOf(movie);
    Movies[index]={...Movies[index]};
    Movies[index].liked= !Movies[index].liked;
    this.setState({Movies});
  }
  handlePageChange = page => {
this.setState({currentPage:page})
  }
  handleGenreSelect= genre =>{
this.setState({
  selectedGenre: genre,
  currentPage:1
})
  }
    render() { 
      
        const {length:count}= this.state.Movies;
        const {pageSize,currentPage,Movies:allMovies,genre,selectedGenre}=this.state;
       
        if(count === 0) return <h4>There are no movies in database</h4>
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
        const movies = Paginate(filtered,currentPage,pageSize);
        return (
          <div className="row">
        <div className="col-2">
          <ListGroup 
          items={genre}
          selectedItem={this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-10">
        <h4>Showing {filtered.length} movies in the database.</h4>
            <MoviesTable 
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            />
      <Pagination 
       itemsCount={filtered.length}
       pageSize={pageSize}
       onPageChange={this.handlePageChange}
       currentPage={currentPage}
      />
        </div>
      </div>
           
        )
    }
  }
  export default Movies;