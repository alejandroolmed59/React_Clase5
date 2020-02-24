import React, {Component} from 'react';
import './App.css';
import{Button,OtherButton} from './Buttons' 
import Login from './Login'
import {Inicio} from './Inicio'
import {user, password} from './credenciales'


const initValues = {
  user: "",
  password: "",
};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      ...initValues,
      logged: false
    }
  }

  changeHandler = event=> {
    console.log(event);
    const { target } = event;
    this.setState({
      [target.id]: target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();
    if(user===this.state.user && password=== this.state.password ){
      this.setState({logged:true});
    }
    
  }

  

  render(){
     const Banner = !this.state.logged? <Login user={this.state.user} password={this.state.password} 
     submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>: <Inicio user={this.state.user}/>
    return(
      <div className="container">
        {Banner}
      </div>
    )
  }
}

export default App;
