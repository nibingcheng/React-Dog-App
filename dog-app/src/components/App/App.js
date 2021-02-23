import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import BreedList from '../../components/BreedList/BreedList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      allBreeds: []
    }
  }

  getAllBreeds = () => {
    let url = 'https://dog.ceo/api/breeds/list/all';

    axios.get(url, {headers: 
      {
        Accept: 'application/json'
      }
    }).then(response => {
        console.log("App:", response.data.message);
        this.setState ({
         allBreeds: response.data.message
       })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    console.log("App:", this.state.allBreeds);
      return (
        <div className="App">
          <header className="App-header">
          <nav>
          <Link to="/">
          <div className="banner">Dog App Home</div>
          </Link>
          <h1>List of Dog Breeds</h1>
          <Link to="/BreedList">
            <div className="banner">Breed List</div>
          </Link>
          </nav>
          </header>

          <main>
            <Switch>
              <Route exact path="/"/>
              
              <Route path="/BreedList" render={routerProps=> 
              <BreedList getAllBreeds={this.getAllBreeds} {...this.state.allBreeds} {...routerProps}/>
              }
              />

              {/* <Route path='/price/:currency'
              render={routerProps=> <Price setPrice={this.setPrice} {...routerProps}
              {...this.state}/>
              }
              /> */}
  
            </Switch>
          </main>
        </div>
      )
  };
}

export default App;
