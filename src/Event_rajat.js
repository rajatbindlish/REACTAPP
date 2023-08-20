import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'

class Event_rajat extends React.Component {

    shoot () {
        alert ("Goallll");
    }

    render () {

        return (

            <button onClick={this.shoot}>Take Penalty</button>
        );
    }
}

export default Event_rajat