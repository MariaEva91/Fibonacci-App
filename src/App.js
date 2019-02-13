import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fibonacci: ''


    }
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.anterior = this.anterior.bind(this);
    this.error = this.error.bind(this);
    this.fibonacci = this.fibonacci.bind(this);
    this.siguiente = this.siguiente.bind(this);
  }

  //function input value

  handleInputOnChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  //operations

  error() {
    if (this.state.input < 0) {
      alert('No existe. Debe ingresar un número mayor a 0');
    }
  }
  // fibonacci serie. This function calculate the next number

  fibonacci() {
    let fibonacci = [0, 1]

    for (let i = 1; i < 100; i++) {
      let suma = fibonacci[i] + fibonacci[i - 1];
      fibonacci.push(suma);
    }
    this.setState({
      fibonacci: fibonacci
    })
    console.log(fibonacci);
  }

  //function previous number
  anterior() {

  }

  //function next number

  siguiente() {

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
          onClick={this.anterior}
          onClick={this.error}>Anterior</button>
        <button
          onClick={this.fibonacci} onClick={this.siguiente}>Siguiente</button>
        <div>{this.state.input}</div>
      </div>
    );
  }
}

export default App;
