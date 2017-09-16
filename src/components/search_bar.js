import React, {Component} from 'react';

// create a new componet with HTML
class SearchBar extends Component{
  render(){
    return <input onChange = {this.onInputChange}/>
  }
  onInputChange(event){
  }
}


export default SearchBar;
