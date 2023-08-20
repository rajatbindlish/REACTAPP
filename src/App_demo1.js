import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App_demo1 extends React.Component {
    constructor()
    {

        super();
        this.state={
            Message:"Welcome to my website",
            Content:"This is Body"

        }
    }

render() {

    return(
        <div>
            <h1>{this.state.Message}</h1>
            <h1>{this.state.Content}</h1>
        </div>
    )
}
}

export default App_demo1;

