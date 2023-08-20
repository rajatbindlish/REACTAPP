import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Work from './Work';
import App_demo1 from './App_demo1'
//import Props_demo from './Props_demo'
import Ravi from './Ravi'
import Event_rajat from './Event_rajat'
import Rajat_UseEffectAPI from './Rajat_UseEffectAPI'
import Rajat_Hooks from './Rajat_Hooks'
import { Route, Switch } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Error from './Error'
import Menu from './Menu'


const App = () => {

  return (
    <div  className="tc"> 
    
      <Menu/>
      <Switch>
      <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Error}/>
      </Switch>
    
      </div>
    );
    
    
    };
     
   


/*
class App extends Component {
  render(){
return (
<div>
  <Work/>
  <App_demo1/>
  <Props_demo/>
  <Ravi/>
  <Event_rajat/>
  <Rajat_UseEffectAPI/>
  <Rajat_Hooks/>


</div>
)
}}


*/
export default App;

