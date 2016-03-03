import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatcher } from '../actions/index.js'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }
  
    onInputChange(event) {
        let input = event.target.value;
        
        console.log(input);
        this.setState( {term: input});
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        
    }
    
    render() {
       return(
         <form onSubmit={this.onFormSubmit} className="input-group">
           <input 
             placeholder="Get a 5 day forcast for a city"
             className="form-control"
             value={this.state.term }
             onChange={this.onInputChange} />
           <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
           </span>
         </form>
       ) 
    }
}


