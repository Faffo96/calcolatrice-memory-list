import React, { Component } from 'react';
import Tasto from './components/tasto-calcolatrice';
import tasti from './components/tasto-calcolatrice';
import Display from './components/display-calcolatrice';


class App extends Component {
  state = {
    tasti: [
      { id: 0, tasto: "7", value: 7, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 1, tasto: "8", value: 8, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 2, tasto: "9", value: 9, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 3, tasto: "+", value: "+", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
      { id: 4, tasto: "4", value: 4, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 5, tasto: "5", value: 5, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 6, tasto: "6", value: 6, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 7, tasto: "-", value: "-", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
      { id: 8, tasto: "1", value: 1, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 9, tasto: "2", value: 2, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 10, tasto: "3", value: 3, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 11, tasto: "X", value: "*", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
      { id: 12, tasto: ".", value: ".", col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 13, tasto: "0", value: 0, col: "col-3", width: "20%", buttonStyle: "btn btn-secondary rounded" },
      { id: 14, tasto: "C", value: "C", col: "col-3", width: "20%", buttonStyle: "btn btn-danger rounded" },
      { id: 15, tasto: "/", value: "/", col: "col-3", width: "20%", buttonStyle: "btn btn-warning rounded" },
      { id: 16, tasto: "=", value: "=", col: "col-12", width: "95%", buttonStyle: "btn btn-warning rounded" }
    ],
    ultimoBottonePremuto: null
  }
  
  salvaUltimoBottonePremuto = (value) => {
    // Controlla se è già stato premuto un pulsante
    if (this.state.ultimoBottonePremuto !== null) {
      // Aggiungi il nuovo valore al valore precedente separandoli con una stringa vuota
      value = this.state.ultimoBottonePremuto + '' + value;
    }
  
    this.setState({ ultimoBottonePremuto: value });
  }

  render() {
    return (
        <div className="container mt-5 rounded bg-dark pb-3" style={{ maxWidth: '300px', border: "3px solid #ffc107", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.25)' }}>
          <div className="row mt-4 mb-4 rounded" style={{ justifyContent: 'center' }}>
          <Display ultimoBottonePremuto={this.state.ultimoBottonePremuto} />
          </div>
          <div className="row m-0">
            {this.state.tasti.map(tasto => (
              <Tasto
                key={tasto.id}
                onClick={this.salvaUltimoBottonePremuto}
                tastoProps = {tasto}
              />
            ))}
          </div>
        </div>
    );
  }
}

export default App;
