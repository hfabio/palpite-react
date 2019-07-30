import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: 'ENTRADA',
      palpite: 150,
      numPalpites: 1,
      min: 0,
      max: 300,
    }
    this.iniciarJogo = this.iniciarJogo.bind(this);
    this.menor = this.menor.bind(this);
    this.maior = this.maior.bind(this);
  }

  iniciarJogo = () => {
    this.setState(
      {
        estado: 'RODANDO',
        palpite: 150,
        numPalpites: 1,
        min: 0,
        max: 300
      }
    );
  }

  menor = () => {
    this.setState(
      {
        numPalpites: this.state.numPalpites + 1,
        max: this.state.palpite,
        palpite: parseInt((this.state.palpite - this.state.min) / 2 + this.state.min)
      }
    );
  }
  maior = () => {
    this.setState(
      {
        numPalpites: this.state.numPalpites + 1,
        min: this.state.palpite,
        palpite: parseInt((this.state.max - this.state.palpite) / 2 + this.state.palpite)
      }
    );
  }

  acertou = () => {
    this.setState({ estado: 'FIM' });
  }

  render() {
    if (this.state.estado === 'ENTRADA') {
      return <button onClick={this.iniciarJogo}>Começar a jogar!</button>
    }
    if (this.state.estado === 'FIM') {
      return (<div>
        <p>Acertei o número de {this.state.palpite} com {this.state.numPalpites} chutes!</p>
        <button onClick={this.iniciarJogo}>Iniciar novamente</button>
      </div>)
    }
    return (
      <div className="App">
        <p>O seu número é {this.state.palpite} </p>
        <p>Min: {this.state.min} / Max: {this.state.max}</p>
        <button onClick={this.menor}>Menor</button>
        <button onClick={this.acertou} >Acertou</button>
        <button onClick={this.maior}>Maior</button>
      </div>
    );
  }
}
