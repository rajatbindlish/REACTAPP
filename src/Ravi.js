import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'



class Ravi extends React.Component {
    constructor () {

        super ()

        this.state={

            data : 0 

        }
    }

    inc () {
        this.setState({
            data : this.state.data + 1

        })
    }

    render (){

        return (

            <div>
                {this.state.data}
                <button onClick={()=>this.inc()}>Button</button>

            </div>
        )
    }
}


export default Ravi