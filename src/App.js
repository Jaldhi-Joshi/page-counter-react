import React, {Component} from 'react';
import './App.css';

const style  = {
  backgroundColor: "black",
  color: "red",
  padding: 30,
  fontSize: 40,
  
}

class App extends Component {
  render() {
    return (
       <div>
        <Counter />
       </div>
    );
  }
}
class Counter extends Component {
  state = {
    value : 40
  }

  buttonclicked = () => {this.setState ((prevState, {value}) => ({
    value: prevState.value + 1
  }));
  }
  render () {
    return (
      <div >
        <button style = {style} onClick = {this.buttonclicked}> {this.state.value} </button>
      </div>
    )
  }
}

export default App;
