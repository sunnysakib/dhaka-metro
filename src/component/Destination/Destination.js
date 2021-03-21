import React, { useState } from 'react';
import './Destination.css';
import map from '../../images/image 6.png'
import Ticket from './Ticket';

const Destination = () => {
    let valid;
    const [input, setInput] = useState({
        valid: false,
        From: '',
        To:''
    });
    const handleSubmit = (e) => {
        // console.log(e.target.name);
        valid = true;
        const newDestination = {...input}
        newDestination[e.target.name] = valid;
        setInput(newDestination);
        e.preventDefault();
    }
    const handleInput = (e) => {
        const newDestination = {...input}
        newDestination[e.target.name] = e.target.value;
        setInput(newDestination);
    }
    
    return (
       <div className='destination container'>
           { (input.From && input.To && input.valid===true) ? <Ticket From = {input}></Ticket>
          : (
            <div className ='destination-form'>
            <form >
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Pick From</label>
              <input type="search" onBlur={handleInput} name ='From' class="form-control" id="exampleInputName1" placeholder="Airpot"></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Pick To</label>
              <input type="search" onBlur={handleInput} name ='To' class="form-control" id="exampleInputName1" placeholder="Rampura"></input>
            </div>
            <input onClick={handleSubmit} type="button" name="valid" value="search"/>
          </form>
          </div>)
        }
          
          <img className="map" src={map} alt=""/>
       </div>
        
    );
};

export default Destination;