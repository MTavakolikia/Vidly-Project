import React from 'react';
import Like from './common/Like';
const MoviesTable = (props) => {
    const {movies,onDelete,onLike}=props;
    return ( 
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
            
          {movies.map( (Movie) =>{
            return <tr key={Movie._id}>
                <td>{Movie.title}</td>
                <td>{Movie.genre.name}</td>
                <td>{Movie.numberInStock}</td>
                <td>{Movie.dailyRentalRate}</td>
                <td>
                  <Like 
                  liked={Movie.liked}
                  onLike={() => onLike(Movie)}
                  value={Movie}
                  />
                  </td>
                <td><button onClick={() => onDelete(Movie)} className="btn btn-danger">Delete</button></td>
                </tr>
          })}
        </tbody>
      </table>
     );
}
 
export default MoviesTable;