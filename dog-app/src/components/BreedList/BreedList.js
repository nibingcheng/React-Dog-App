import React, { Component } from 'react';
import './BreedList.css';
import {Switch, Route, Link } from 'react-router-dom';

class BreedList extends Component {
    render() {      
      let renderEnable = false;
      let breedsListArry = [];
      const breedsList = Object.keys(this.props);
      
      if (breedsList.length > 5) {
          renderEnable = true;

          for (let i=1; i<breedsList.length; i++) {
            breedsListArry.push(<p> {breedsList[i]} </p>)
          }
      }
      console.log('BreedList page', breedsList);
      return (         
        <div className="App">
            <header className="App-header">
            This is the breed list page!
            </header>
            <button onClick={this.props.getAllBreeds}>List All Breeds</button>
            {renderEnable ?
                <div className="breedsList">
                    {breedsListArry}
                </div>
            : null
            }
        </div>
      )
  };
}

export default BreedList;
