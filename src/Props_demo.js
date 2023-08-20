import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import Work from './Work';
import App_demo1 from './App_demo1'

class Props_demo extends Component {

    constructor(props)
    {

        super(props)
        this.state = {

            message : "Welcome to my website11111"
        }
    }

    render ()
    {

        return (<Content a ={this.state.message} /> )
            }
}


class Content extends React.Component {

    render () {
        return (

            <h1> {this.props.a} </h1>
        )
    }
}

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

        returnrun (

            <div>
                {this.state.data}
                <button onClick={()=>this.inc()}Button1></button>

            </div>
        )
    }
}


export default Props_demo