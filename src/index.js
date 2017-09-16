import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyCcCc1PNHYLw2pVHikkVHnBLCAOQGer94Q";


// create a new componet with HTML
const App = ()=>{
  return (<div>
    <SearchBar />
  </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'))
