import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
class Ars extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
          <App/>

        )
    }
}

ReactDOM.render(
    <Ars/>,document.getElementById('root')
)
