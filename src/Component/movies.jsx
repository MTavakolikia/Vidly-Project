import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/Like';
class Movies extends Component {
        constructor(){
          super();
          this.state={
              Movies:getMovies()
          }
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
    render() { 
        const {length:count}= this.state.Movies;
        if(count === 0) return <h4>There are no movies in database</h4>
        return (<React.Fragment>
            <h4>Showing {count} movies in the database.</h4>
            <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
            
          {this.state.Movies.map( (Movie) =>{
            return <tr key={Movie._id}>
                <td>{Movie.title}</td>
                <td>{Movie.genre.name}</td>
                <td>{Movie.numberInStock}</td>
                <td>{Movie.dailyRentalRate}</td>
                <td>
                  <Like 
                  liked={Movie.liked}
                  onLike={() => this.handleLike(Movie)}
                  value={Movie}
                  />
                  </td>
                <td><button onClick={() => this.handleDelete(Movie)} className="btn btn-danger">Delete</button></td>
                </tr>
          })}
        </tbody>
      </table>
        </React.Fragment>)
    }
  }
  export default Movies;