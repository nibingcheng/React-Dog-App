import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import BreedList from '../../components/BreedList/BreedList';
import RandomDogs from '../../components/RandomDogs/RandomDogs';

class App extends Component {
  constructor() {
    super()

    this.state = {
      allBreeds: [],
      randomImgUrl: null
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
  
  getRandomDog = (breed) => {
    let url = `https://dog.ceo/api/breed/${breed}/images/random`;

    axios.get(url, {headers: 
      {
        Accept: 'application/json'
      }
    }).then(response => {
        // console.log("App:", response.data.message);
        this.setState ({
        randomImgUrl: response.data.message
       })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    console.log("App BreedList:", this.state.allBreeds);
    console.log("App Random dog url:", this.state.randomImgUrl);
    
      return (
        <div className="App">
            <header className="App-header">
            <nav>
            <Link to="/">
            <div className="banner">Dog App Home</div>
            </Link>
        
            <Link to='/random'>
              <div>Random Dog</div>
            </Link>
          
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

                <Route path='/random' render={routerProps=> 
                <RandomDogs getRandomDog={this.getRandomDog} {...this.state.randomImgUrl} {...routerProps}/>
                }
                />
              </Switch>
              { this.state.randomImgUrl !== null &&
                <img src={this.state.randomImgUrl} alt="" />
                
              }
            </main>
        </div>
      )
  };
}

export default App;
