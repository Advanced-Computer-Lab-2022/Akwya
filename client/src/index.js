//this file is where we are going to connect the react application to the html file

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

ReactDOM.render(<App />, document.getElementById('root')); // connecting to the div with an id of root