import React,{Component} from 'react';
import Like from './common/Like';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';
class MoviesTable extends Component {
  columns=[
      { path: 'title', label: 'Title'},
      { path: 'genre.name', label: 'Genre'},
      { path: 'numberInStock', label: 'Stock'},
      { path: 'dailyRentalRate', label: 'Rate'},
      {key:'Like' , content: movie => (
      <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}
      />
      )
    },
      {key:'Delete', content:movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}
    ]
  render() { 
    
    const {movies,onSort,sortColumn}=this.props;
    return ( 
        <table className="table">
        <TableHeader
        sortColumn={sortColumn}
        columns={this.columns}
        onSort={onSort}
         />
        <TableBody 
        data={movies}
        columns={this.columns}
        />
      </table>
     );
  }
}
 

export default MoviesTable;