import React, { Component } from 'react';
import './BreedList.css';


class BreedList extends Component {
    render() {      
      let renderEnable = false;
      let breedsListArry = [];
      const breedsList = Object.keys(this.props);
      
      if (breedsList.length > 5) {
          renderEnable = true;

          for (let i=1; i<breedsList.length; i++) {
            breedsListArry.push(<p key={i}> {breedsList[i]} </p>)
          }
      }
      console.log('BreedList page', breedsList);
      return (         
        <div className="BreedList">
            <header className="BreedList-header">
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
