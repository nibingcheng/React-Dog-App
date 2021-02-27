import React, { Component } from 'react';
import './RandomDogs.css';
import { Link } from 'react-router-dom';

class RandomDogs extends Component {
    constructor() {
        super()
    
        this.state = {
          breed: []
        }
      }
    
    handleChange=(e)=>{ 
        e.preventDefault();
        this.setState ({
            breed: e.target.value
        })
    }

    handleSubmit=(e)=>{ 
        e.preventDefault();    
        this.props.getRandomDog(this.state.breed);
    }

    render() {
      console.log(this.props);
        let urlArry = Object.values(this.props);
        // let urlArray = [];
        // for (let i=0; i<urlArry.length; i++) {
        //     urlArray.push(urlArry.reverse().pop());
        // }
        console.log("Random dog url:", urlArry);
        
      return (         
        <div className="RandomDogs">
            <header className="RandomDogs-header">
            This is the RandomDogs page!
            </header>
            <div>
                <input type="text" placeholder="Breed Name" onChange={this.handleChange}/>
                <br /><br />
                <Link to='/random'>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </Link>
            </div>      
        </div>
      )
  };
}

export default RandomDogs;
