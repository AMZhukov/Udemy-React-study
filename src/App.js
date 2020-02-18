import React, {Component} from 'react';
import './App.css';
import Car from './App/Car';

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center',
    };
    return (
        <div style={divStyle}>
          <h1>
            First Project
          </h1>
          <Car name={'Ford'} year={2018} />
          <Car name='Audi' year={2016}>
            <p style={{color: 'red'}}>COLOR</p> </Car>
          <Car name={'Mazda'} year={2010} />
        </div>
    );
  }
}

export default App;
