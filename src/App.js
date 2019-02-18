import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fibonacciSiguiente: '',
      fibonacciAnterior: '',
      numeroDeLaSerie: ''
    }

    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.fibonacciAnterior = this.fibonacciAnterior.bind(this);
    this.fibonacciSiguiente = this.fibonacciSiguiente.bind(this);

  }

  //function input value

  handleInputOnChange(event) {
    this.setState({
      input: event.target.value
    })
  }


  //function next number

  fibonacciSiguiente() {
    if (this.state.input < 0) {
      alert('No existe. Debe ingresar un número mayor a 0');
    };
    if (this.state.input == '') {
      alert('Debe ingresar un número')
    };

    let fibonacci = [0, 1]
    //calcular fibonacci hasta llegar al mayor despues del que ingreso el usuario
    for (let i = 1; fibonacci[fibonacci.length - 1] <= this.state.input; i++) {
      let suma = fibonacci[i] + fibonacci[i - 1];
      fibonacci.push(suma);
    }
    //separar el ultimo elemento del array para mostrarlo
    let numeroSiguiente = fibonacci[fibonacci.length - 1];

    this.setState({
      fibonacciSiguiente: numeroSiguiente,
      numeroDeLaSerie: 'siguiente'

    })

  }


  //function previous number

  fibonacciAnterior() {
    if (this.state.input == '') {
      alert('Debe ingresar un número')
    };
    if (this.state.input < 0) {
      alert('No existe. Debe ingresar un número mayor a 0');
    };

    let fibonacci = [0, 1]

    for (let i = 1; fibonacci[fibonacci.length - 1] < this.state.input; i++) {
      let suma = fibonacci[i] + fibonacci[i - 1];
      fibonacci.push(suma);
    }
    //separar el anteultimo elemento del array para mostrarlo
    let numeroAnterior = fibonacci[fibonacci.length - 2];

    this.setState({
      fibonacciAnterior: numeroAnterior,
      numeroDeLaSerie: 'anterior'
    })

  }




  render() {

    return (
      <div className="App">
        <p>Fibonacci App</p>
        <div> <input placeholder="Introduzca un número"
          className="input"
          type="number"
          onChange={this.handleInputOnChange}></input></div>

        <button
          onClick={this.fibonacciAnterior}>Anterior</button>
        <button
          onClick={this.fibonacciSiguiente}>Siguiente</button>

        <div>El número {this.state.numeroDeLaSerie} es: {this.state.fibonacciSiguiente} {this.state.fibonacciAnterior}</div>
      </div>
    );
  }
}

export default App;
