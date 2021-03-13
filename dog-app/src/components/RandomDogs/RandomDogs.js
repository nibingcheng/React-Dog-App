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
      console.log(this.props.randomImgUrl);
     
      return (         
        <div className="RandomDogs">
            <header className="RandomDogs-header">
            This is the RandomDogs page!
            </header>
            <div>
                <input type="text" placeholder="Breed Name" onChange={this.handleChange}/>
                <br /><br />
                <Link to='/random'>
                <button type='submit' onClick={this.handleSubmit}>Submit</button><br /><br />
                </Link>
            </div>      
            {/* render picture of random dog if exists */}
            { this.props.randomImgUrl !== null &&
                <div>
                <img src={this.props.randomImgUrl} alt="" />
              
                </div>
              }
        </div>
      )
  };
}

export default RandomDogs;
