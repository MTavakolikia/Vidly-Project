import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Movies from './Component/movies';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Customers from './Component/Customers';
import Rental from './Component/Rentals';
import NavBar from './Component/navBar';
import NotFound from './Component/Not-Found';
import MovieForm from './Component/MovieForm';
import LoginForm from './Component/LoginForm';
class App extends Component {
  constructor(){
    super();
    this.state={
      genre:getMovies()
    }
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <Switch>
        <Route path="/Login" component={LoginForm} /> 
        <Route path="/Movies/:id" component={MovieForm} />
        <Route path="/Movies" component={Movies} />
        <Route path="/Customer" component={Customers} />
        <Route path="/Rentals" component={Rental} />
        <Route path="/Not-Found" component={NotFound} />
        <Redirect from="/" exact to="/Movies" />
        <Redirect to="Not-Found" />
        </Switch> 
        
        </main>
        
      </React.Fragment>
    );
   
  }
}
 
export default App;
