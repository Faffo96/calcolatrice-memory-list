import React, { Component } from 'react';
import Tasti from './components/tasto-calcolatrice';
import Display from './components/display-calcolatrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
    primoAddendo: null,
    secondoAddendo: null,
    operatore: null,
    risultato: null,
    log: ""
  }

  salvaUltimoBottonePremuto = (value) => {
    // Controlla se il valore del tasto premuto è "="
    if (value === "=") {
      // Esegui l'operazione
      this.eseguiOperazione();
    } else {
      // Controlla se il valore del tasto premuto è "C" (cancellazione)
      if (value === "C") {
        // Svuota le variabili e il display
        this.setState({ primoAddendo: null, secondoAddendo: null });
      }
      // Controlla se il valore del tasto premuto è uno degli operatori (+, -, *, /)
      else if (value === "+" || value === "-" || value === "*" || value === "/") {
        // Svuota il display e crea una nuova variabile per il secondo addendo
        this.setState({ primoAddendo: null, secondoAddendo: this.state.primoAddendo, operatore: value });
      } else {
        // Controlla se è già stato premuto un pulsante
        if (this.state.primoAddendo !== null) {
          // Aggiungi il nuovo valore al valore precedente
          this.setState({ primoAddendo: this.state.primoAddendo + '' + value });
        } else {
          this.setState({ primoAddendo: value });
        }
      }
    }
  }

  eseguiOperazione = () => {
    const { secondoAddendo, primoAddendo, operatore, log } = this.state;
  
    if (primoAddendo !== null && secondoAddendo !== null && operatore !== null) {
      let risultato;
  
      switch (operatore) {
        case "+":
          risultato = parseFloat(primoAddendo) + parseFloat(secondoAddendo);
          break;
        case "-":
          risultato = parseFloat(secondoAddendo) - parseFloat(primoAddendo);
          break;
        case "*":
          risultato = parseFloat(primoAddendo) * parseFloat(secondoAddendo);
          break;
        case "/":
          risultato = parseFloat(secondoAddendo) / parseFloat(primoAddendo);
          break;
        default:
          break;
      }
  
      const nuovoLog = `${log}${primoAddendo}\n${operatore}\n${secondoAddendo}\n=\n${risultato}\n`;
  
      this.setState({ primoAddendo: risultato, secondoAddendo: null, operatore: null, log: nuovoLog });
    }
  }



  render() {
    return (
      <>
        <div className="container mt-5 rounded bg-dark pb-3" style={{ position: 'absolute', left: '0px', maxWidth: '203px', height: '401px', border: "3px solid #ffc107", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.25)' }}>
          <div className="row pt-4 pb-4">
            <FontAwesomeIcon className="col-6" icon={faChevronLeft} style={{ color: "#ffc107", marginTop: "185px", width:'15px' }} />
            <textarea readOnly className="col-6 p-0" style={{whiteSpace: 'pre-wrap', overflow: 'auto', color: '#ffc107', backgroundColor: '#212529', border: '1px solid #212529', width:'150px', height: '340px'}} value={this.state.log}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut scelerisque ante. Vestibulum at tortor auctor, euismod orci non, consectetur nunc. Nulla tincidunt, elit nec feugiat efficitur, dui ligula facilisis nunc, vel efficitur enim ligula non urna. Aliquam pellentesque turpis sed leo auctor, in vestibulum orci finibus. Sed vitae justo nec velit semper sollicitudin. Fusce id aliquet dolor, et cursus risus. Integer pulvinar ex nec purus sollicitudin, et commodo turpis auctor. Sed laoreet, sem vitae rhoncus imperdiet, ante nisl lacinia leo, non luctus justo justo eu nunc. Praesent et odio placerat, gravida lectus eget, tincidunt erat. Curabitur lacinia mauris a purus finibus, nec blandit libero lobortis.</textarea>
          </div>
        </div>
        <div className="container mt-5 rounded bg-dark pb-3" style={{ position: 'absolute', left: '200px', maxWidth: '300px', border: "3px solid #ffc107", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.25)' }}>
          <div className="row mt-4 mb-4 rounded" style={{ justifyContent: 'center' }}>
            <Display primoAddendo={this.state.primoAddendo} />
          </div>
          <div className="row m-0">
            {this.state.tasti.map(tasto => (
              <Tasti
                key={tasto.id}
                onClick={this.salvaUltimoBottonePremuto}
                tastoProps={tasto}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
