// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Hello from './components/Hello'
import Covid from './components/Covid'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state ={
      // name:"ฝน"
      name : {}
    }
  }
  componentDidMount() {
    console.log("DidMount");
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(function(response){
    console.log(response.data);
    self.setState({name: response.data});
    },
    function(error){
    console.log(error);
    })
    }

  // componentWillUnmount() {
  //   console.log("WillUnmount");
  // }
  render() {
      console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <Covid data={this.state.name} /> 
        </header>
      </div>
    );
  }
}

export default App;
