import React, {Component} from 'react';
import './App.css';
import Car from './App/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
    ],
    pageTitle: 'React components',
    showCars: false,
};

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    // const cars = this.state.cars.concar(); // Используя ES5
    const cars = [...this.state.cars]; // Используя ES6, Spread оператор
    cars.index = car;
    this.setState({
      // cars: cars,
    cars // тут достаточно так, потому-что совпадают ключ и значения
    })
  }

  deleteHandler (index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars})
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    };

    let cars = null;
    if  (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
            <div style={{
              width: '400px',
              margin: 'auto',
              paddingTop: '20px',
              boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
              borderRadius: '5px',
              border: '1px solid black',
            }}>
              <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onDelete={this.deleteHandler.bind(this, index)}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
              />
            </div>
        )
      })
    }

    return (
        <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          <button onClick={this.toggleCarsHandler}>Toggle cars</button>
          { cars }
        </div>
    );
  }
}

export default App;
