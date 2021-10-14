import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Movies from './Component/movies';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      genre:getMovies()
    }
  }
  render() { 
    return <div className="container">
          <Movies />
    </div>;
  }
}
 
export default App;
